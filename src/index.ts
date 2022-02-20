import { parseMessage, Part, Pattern } from 'electribe-core';

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
        document.getElementById('input').innerHTML = midiInput.name;
        document.getElementById('output').innerHTML = midiOutput.name;

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

    const {
        pattern: { name, tempo, beat, length, part, ...pattern },
    } = parseMessage(data);

    console.log({ pattern, part });

    document.getElementById('pattern-name').innerText = name;
    document.getElementById('pattern-tempo').innerHTML = renderPatternTempo(
        tempo,
        beat,
        length,
    );

    document.getElementById('pattern-detail').innerHTML =
        renderDetails(pattern);

    document.getElementById('parts').innerHTML = part.map(renderPart).join('');
}

document.getElementById('pattern-tempo').onclick = () => {
    const display = document.getElementById('pattern-detail').style.display;
    document.getElementById('pattern-detail').style.display =
        display === 'block' ? 'none' : 'block';
};

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
                        Oscillator
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
                            title="${modulation.name.source} to ${modulation.name
                                .destination} (bpmSync: ${modulation.name
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
