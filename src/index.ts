import { Octokit } from '@octokit/core';

import {
    event,
    parseMessage,
    parsePattern,
    Part,
    Pattern,
    setName,
    SYSEX_GET_CURRENT_PATTERN,
    pat2sys,
    sys2pat,
} from 'electribe-core';
import { elByClass, elById, evEach, forEachClass, inputById } from './dom';
import { gitHubStorage } from './storage/GitHubStorage';
import './setting';
import './log';

// Define fake html lit-html
// import { html } from 'lit-html';
// https://lit.dev/docs/libraries/standalone-templates/
// or could use /* html */
const html = (strings: TemplateStringsArray, ...values: any[]) => {
    return strings.flatMap((str, i) => [str, values[i] ?? '']).join('');
};

// request MIDI access
if (navigator.requestMIDIAccess) {
    navigator
        .requestMIDIAccess({
            sysex: true,
        })
        .then(onMIDISuccess, onMIDIFailure);
} else {
    alert('No MIDI support in your browser.');
}

let midi;
let midiOutput;

function findElectribe2(sources) {
    return [...sources.values()].find(({ name }) =>
        name.startsWith('electribe2'),
    );
}

function onMIDISuccess(midiAccess) {
    midi = midiAccess;

    const midiInput = findElectribe2(midi.inputs);
    midiOutput = findElectribe2(midi.outputs);

    if (!midiInput || !midiOutput) {
        alert(
            'Could not find electribe 2, check if device is properly connect.',
        );
    } else {
        midiInput.onmidimessage = onMIDIMessage;
        elById('io').innerHTML =
            midiInput.name === midiOutput.name
                ? midiOutput.name
                : `${midiInput.name} / ${midiOutput.name}`;

        queryCurrentPattern();
    }
}

function queryCurrentPattern() {
    midiOutput.send(SYSEX_GET_CURRENT_PATTERN);
}

function onMIDIFailure(error) {
    console.error(
        "No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim ",
        error,
    );
}

function onMIDIMessage({ data }) {
    // ignore with clock data[0] !== 248
    if (data[0] === 248) {
        return;
    }

    parseMessage(data);
}

event.onMidiData = ({ data }) => console.log('MIDI data', data);

event.onError = ({ type }) => console.error('Error', type);

event.onWriteDone = () => console.log('Write done successfully.');

event.onPatternData = handlePatternData;

function handlePatternData({
    pattern: { name, tempo, beat, length, part, ...pattern },
    data,
}: {
    pattern: Pattern;
    data: number[];
}) {
    console.log(part.map(({ modulation }) => modulation));

    elById('send').onclick = () => {
        console.log('try to send data', data);
        midiOutput.send(data);
        alert('Pattern sent');
    };

    const download = () => {
        const e2pat = sys2pat([...data]);
        const a = elById<any>('download');
        a.href =
            'data:application/octet-stream;base64,' +
            Buffer.from(e2pat).toString('base64');
        a.download = `${name}.e2pat`;
    };
    elById('download').onclick = download;
    download();

    elById('push').onclick = async () => {
        console.log('data', data);
        const e2pat = sys2pat([...data]);
        console.log('e2pat', e2pat);
        await gitHubStorage.saveFile('hello.e2pat', e2pat);

        // or

        // const octokit = new Octokit({ auth: getGithubToken() });
        // await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        //     owner: 'apiel',
        //     repo: 'zic',
        //     path: 'yo.e2pat',
        //     message: 'message',
        //     content: Buffer.from(e2pat).toString('base64'),
        //     // content: btoa(e2pat as any)
        // });
    };

    inputById('edit-name').onblur = () => {
        elById('pattern-name').style.display = 'block';
        elById('edit-name').style.display = 'none';
        // should instead change data and rerender
        // elById('pattern-name').innerHTML = `${inputById('edit-name').value} ${svgEdit()}`;
        const newData = setName(data, inputById('edit-name').value);
        handlePatternData({ data: newData, pattern: parsePattern(newData) });
    };

    // console.log({ pattern, part });

    elById('pattern-name').innerHTML = `${name} ${svgEdit()}`;
    inputById('edit-name').value = name;
    elById('pattern-tempo').innerHTML = renderPatternTempo(tempo, beat, length);

    elById('pattern-detail').innerHTML = renderDetails(pattern);

    elById('parts').innerHTML = part.map(renderPart).join('');
}

elById('fileSelector').onchange = async (event) => {
    const file = (<HTMLInputElement>event.target).files[0];
    const data = pat2sys([...new Uint8Array(await file.arrayBuffer())]);
    parseMessage(data);
};

elById('pattern-name').onclick = () => {
    elById('pattern-name').style.display = 'none';
    elById('edit-name').style.display = 'block';
    inputById('edit-name').focus();
};

elById('pattern-tempo').onclick = () => {
    const display = elById('pattern-detail').style.display;
    elById('pattern-detail').style.display =
        display === 'block' ? 'none' : 'block';
};

evEach(elByClass('topBtn'), 'click', (event) => {
    forEachClass('view', (el) => ((<HTMLElement>el).style.display = 'none'));
    elById((<HTMLElement>event.target).dataset.view).style.display = 'block';
});

function svgEdit() {
    return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
    >
        <title>edit</title>
        <path
            d="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z"
        />
    </svg>`;
}

function renderPart({
    name,
    oscillator,
    filter,
    modulation,
    effect,
    envelope,
    ...rest
}: Part) {
    return html`
        <div class="part">
            <h3>${name}</h3>
            <div class="content">
                <div class="oscillator">
                    <h4>
                        Osc
                        <span
                            >${oscillator.name.name}
                            (${oscillator.name.type})</span
                        >
                    </h4>
                    ${renderDetails(oscillator)}
                </div>
                <div class="filter">
                    <h4>
                        Filter
                        <span>${filter.name.name} (${filter.name.type})</span>
                    </h4>
                    ${renderDetails(filter)}
                </div>
                <div class="modulation">
                    <h4>
                        Modulation
                        <span
                            title="${modulation.name.source} to ${modulation
                                .name.destination} (bpmSync: ${modulation.name
                                .bpmSync} keySync: ${modulation.name.keySync})"
                            >${modulation.name.name} ⓘ</span
                        >
                    </h4>
                    ${renderDetails(modulation)}
                </div>
                <div class="effect">
                    <h4>Effect <span>${effect.name}</span></h4>
                    ${renderDetails(effect)}
                </div>
                <div class="envelope">
                    <h4>Envelope</h4>
                    ${renderDetails(envelope)}
                </div>
                <div class="setting">
                    <h4>Setting</h4>
                    ${renderDetails(rest)}
                </div>
            </div>
        </div>
    `;
}

function renderPatternTempo(tempo: number, beat: string, length: number) {
    return html`<b>BPM: ${tempo / 10}</b>
        <span>Beat: ${beat} Lenght: ${length}</span>`;
}

function renderDetails(data: Object, skip = ['id', 'name']) {
    return Object.keys(data)
        .filter((key) => !skip.includes(key))
        .map((key) => renderDetail(key, data[key]))
        .join('');
}

function renderDetail(key: string, value: any) {
    if (typeof value === 'boolean') {
        value = value ? 'on' : 'off';
    } else if (typeof value === 'object') {
        // ??
    }
    return html`<div><span>${key}</span>: <span>${value}</span></div>`;
}
