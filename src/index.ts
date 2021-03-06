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
    START_POS,
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
    pattern: { name, tempo, beat, length, parts, ...pattern },
    data,
}: {
    pattern: Pattern;
    data: number[];
}) {
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
        const e2pat = sys2pat([...data]);
        try {
            await gitHubStorage.saveFile(
                `${name.replace(/ /g, '_')}.e2pat`,
                e2pat,
            );
        } catch (error) {
            alert(error.message);
        }
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

    elById('parts').innerHTML = parts.map(renderPart).join('');

    parts.forEach(({ name: id }, i) => {
        // download
        const a = <any>elById(id).getElementsByClassName('download')[0];
        const partDownload = () => {
            const e2part = [...data].slice(START_POS[i], START_POS[i] + 930);
            a.href =
                'data:application/octet-stream;base64,' +
                Buffer.from(e2part).toString('base64');
            a.download = `${name}_${id.replace(' ', '')}.e2part`;
        };
        a.onclick = partDownload;
        partDownload();

        // upload

        (<HTMLInputElement>(
            elById(id).getElementsByClassName('fileSelector')[0]
        )).onchange = async (event) => {
            const file = (<HTMLInputElement>event.target).files[0];
            const partData = [...new Uint8Array(await file.arrayBuffer())];
            const startData = [...data].slice(0, START_POS[i]);
            const endData = [...data].slice(START_POS[i] + 930);
            const newData = [...startData, ...partData, ...endData];
            parseMessage(newData);
        };
    });
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

function displayView(id: string) {
    forEachClass('view', (el) => ((<HTMLElement>el).style.display = 'none'));
    const el = elById(id);
    el.style.display = 'block';
    el.dispatchEvent(new Event('display'));
}

evEach(elByClass('viewBtn'), 'click', (event) =>
    displayView((<HTMLElement>event.target).dataset.view),
);

elById('gitFileSelectorView').addEventListener('display', async () => {
    try {
        const files = await gitHubStorage.readdir('/');
        elById('gitFiles').innerHTML = files
            .filter((f) => f.endsWith('.e2pat'))
            .map((file) => html` <div class="gitFile">${file}</div> `)
            .join('');
        evEach(elByClass('gitFile'), 'click', async (event) => {
            const filename = (<HTMLElement>event.target).innerText;
            const data = pat2sys([
                ...new Uint8Array(await gitHubStorage.read(filename)),
            ]);
            parseMessage(data);
            displayView('mainView');
        });
    } catch (error) {
        alert(error.message);
    }
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
    settings,
}: Part) {
    return html`
        <div class="part" id="${name}">
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
                    <div class="inline">${renderDetails(oscillator)}</div>
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
                        Mod
                        <span
                            title="${modulation.name.source} to ${modulation
                                .name.destination} (bpmSync: ${modulation.name
                                .bpmSync} keySync: ${modulation.name.keySync})"
                            >${modulation.name.name} ???</span
                        >
                    </h4>
                    <div class="inline">${renderDetails(modulation)}</div>
                </div>
                <div class="effect">
                    <div class="onOff ${effect.on ? 'on' : 'off'}">
                        <div>IFX <span>${effect.name}</span></div>
                        <div class="${effect.on ? 'on' : 'off'}">
                            ${effect.edit}
                        </div>
                    </div>
                </div>
                <div class="envelope">
                    <h4>Envelope</h4>
                    <div class="level">
                        <span class="label">Level</span
                        ><span>${envelope.level}</span
                        ><span>${envelope.pan}</span>
                    </div>
                    <div class="ampEG ${envelope.ampEG ? 'on' : 'off'}">
                        <span class="label">Attack</span
                        ><span>${envelope.attack}</span
                        ><span class="label">Decay</span
                        ><span>${envelope.decayRelease}</span>
                    </div>
                </div>
                <div class="setting">
                    <h4>Settings</h4>
                    ${renderDetails(settings)}
                </div>
                <div class="file">
                    <input type="file" class="fileSelector" accept=".e2part" />
                    <a class="download">Download</a>
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
    return html`<div><span>${key}</span> <span>${value}</span></div>`;
}
