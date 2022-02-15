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

    const headers = data.slice(0, 7).toString();
    switch (headers) {
        case '240,66,48,0,1,34,64': // e2s ?
        case '240,66,48,0,1,35,64': // e2
            console.log('Received pattern', data);
            parsePattern(data);
            break;

        default:
            console.log('MIDI data', headers, data);
            break;
    }
}

function parsePattern(rawData) {
    const data = [...rawData];
    const name = data
        .slice(26, 43)
        .filter((c, k) => c && k != 13) // data[39], here 13, is used for tempo ? kind of weird...
        .map((c) => String.fromCharCode(c))
        .join('');

    const tempo = data[46] + data[48] * 256 + (data[39] ? 128 : 0);
    console.log({
        name,
        tempo,
    });
}

document.getElementById('note').innerHTML = Array(255)
    .fill()
    .map(
        (_, key) =>
            `<option value="${(key + 24) % 255}">${(key + 24) % 255}</option>`,
    )
    .join('');

document.getElementById('clear').onclick = () => {
    document.getElementById('log').innerHTML = '';
};

document.getElementById('send').onclick = () => {
    const { value: data } = document.getElementById('data');
    const msg = JSON.parse(data);
    console.log(`Send to ${output.name}:`, msg);
    midiOutput.send(msg);
};

document.getElementById('sendHex').onclick = () => {
    const { value: data } = document.getElementById('dataHex');
    const msg = data
        .replaceAll('0x', '')
        .replaceAll(',', ' ')
        .replace(/\s\s+/g, ' ') // replace multiple space to one
        .split(' ')
        .map((v) => parseInt(`0x${v}`));
    console.log(`Send to ${output.name}:`, msg);
    midiOutput.send(msg);
};

// Custom console.log

rewireLoggingToElement(
    () => document.getElementById('log'),
    () => document.getElementById('log-container'),
    true,
);

function rewireLoggingToElement(eleLocator, eleOverflowLocator, autoScroll) {
    fixLoggingFunc('log');
    fixLoggingFunc('debug');
    fixLoggingFunc('warn');
    fixLoggingFunc('error');
    fixLoggingFunc('info');

    function fixLoggingFunc(name) {
        console['old' + name] = console[name];
        console[name] = function (...arguments) {
            const output = produceOutput(name, arguments);
            const eleLog = eleLocator();

            if (autoScroll) {
                const eleContainerLog = eleOverflowLocator();
                const isScrolledToBottom =
                    eleContainerLog.scrollHeight -
                        eleContainerLog.clientHeight <=
                    eleContainerLog.scrollTop + 1;
                eleLog.innerHTML += output + '<br>';
                if (isScrolledToBottom) {
                    eleContainerLog.scrollTop =
                        eleContainerLog.scrollHeight -
                        eleContainerLog.clientHeight;
                }
            } else {
                eleLog.innerHTML += output + '<br>';
            }

            console['old' + name].apply(undefined, arguments);
        };
    }

    function produceOutput(name, args) {
        return args.reduce((output, arg) => {
            return (
                output +
                '<span class="log-' +
                typeof arg +
                ' log-' +
                name +
                '">' +
                (typeof arg === 'object' ? JSON.stringify(arg) : arg) +
                '</span>&nbsp;'
            );
        }, '');
    }
}
