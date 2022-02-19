import { parseMessage } from 'electribe-core';

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
    document.getElementById('pattern-tempo').innerHTML = `<b>BPM: ${
        tempo / 10
    }</b> <span>Beat: ${beat} Lenght: ${length}</span>`;

    document.getElementById('pattern-detail').innerHTML = Object.keys(pattern)
        .map((key) => {
            return `<div><span>${key}</span>: <span>${pattern[key]}</span></div>`;
        })
        .join('');
}

document.getElementById('pattern-tempo').onclick = () => {
    const display = document.getElementById('pattern-detail').style.display;
    document.getElementById('pattern-detail').style.display =
        display === 'block' ? 'none' : 'block';
};
