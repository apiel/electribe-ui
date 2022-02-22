import { event, parseMessage, Part } from 'electribe-core';
import { elByClass, elById, evEach } from './dom';

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

    // for testing purpose
    (window as any).midi = midi;
    (window as any).midiOutput = midiOutput;

    if (!midiInput || !midiOutput) {
        alert(
            'Could not find electribe 2, check if device is properly connect.',
        );
    } else {
        midiInput.onmidimessage = onMIDIMessage;
        elById('input').innerHTML = midiInput.name;
        elById('output').innerHTML = midiOutput.name;

        queryCurrentPattern();
    }
}

function queryCurrentPattern() {
    midiOutput.send([240, 66, 48, 0, 1, 35, 16, 247]);
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

event.onPatternData = ({
    pattern: { name, tempo, beat, length, part, ...pattern },
    data,
}) => {
    // For testing purpose
    // https://webaudio.github.io/web-midi-api/#midioutput-interface
    // midiOutput.send(lastPatternData)
    // unfortunately, it is too big and doesnt work for the moment
    // https://github.com/WebAudio/web-midi-api/issues/158
    (window as any).lastPatternData = data;
    elById('send').onclick = () => {
        midiOutput.send(data);
        alert('Pattern sent');
    };

    console.log({ pattern, part });

    elById('pattern-name').innerText = name;
    elById('pattern-tempo').innerHTML = renderPatternTempo(tempo, beat, length);

    elById('pattern-detail').innerHTML = renderDetails(pattern);

    elById('parts').innerHTML = part.map(renderPart).join('');
};

elById('pattern-tempo').onclick = () => {
    const display = elById('pattern-detail').style.display;
    elById('pattern-detail').style.display =
        display === 'block' ? 'none' : 'block';
};

evEach(elByClass('topBtn'), 'click', (event) => {
    Array.from(elByClass('view')).forEach(
        (el) => ((<HTMLElement>el).style.display = 'none'),
    );
    elById((<HTMLElement>event.target).dataset.view).style.display = 'block';
});

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
