// request MIDI access
if (navigator.requestMIDIAccess) navigator.requestMIDIAccess({
    sysex: true
}).then(onMIDISuccess, onMIDIFailure);
else alert('No MIDI support in your browser.');
let midi;
let midiOutput;
function findElectribe2(sources) {
    return [
        ...sources.values()
    ].find(({ name  })=>name.startsWith('electribe2')
    );
}
function onMIDISuccess(midiAccess) {
    midi = midiAccess;
    const midiInput = findElectribe2(midi.inputs);
    midiOutput = findElectribe2(midi.outputs);
    if (!midiInput || !midiOutput) alert('Could not find electribe 2, check if device is properly connect.');
    else {
        midiInput.onmidimessage = onMIDIMessage;
        document.getElementById('input').innerHTML = midiInput.name;
        document.getElementById('output').innerHTML = midiOutput.name;
        queryCurrentPattern();
    }
}
function queryCurrentPattern() {
    midiOutput.send([
        240,
        66,
        48,
        0,
        1,
        35,
        16,
        247
    ]);
}
function onMIDIFailure(error) {
    console.error("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim ", error);
}
function onMIDIMessage({ data  }) {
    // ignore with clock data[0] !== 248
    if (data[0] === 248) return;
}
document.getElementById('clear').onclick = ()=>{
    document.getElementById('log').innerHTML = '';
};
// Custom console.log
rewireLoggingToElement(()=>document.getElementById('log')
, ()=>document.getElementById('log-container')
, true);
function rewireLoggingToElement(eleLocator, eleOverflowLocator, autoScroll) {
    fixLoggingFunc('log');
    fixLoggingFunc('debug');
    fixLoggingFunc('warn');
    fixLoggingFunc('error');
    fixLoggingFunc('info');
    function fixLoggingFunc(name) {
        console['old' + name] = console[name];
        console[name] = function(...arguments) {
            const output = produceOutput(name, arguments);
            const eleLog = eleLocator();
            if (autoScroll) {
                const eleContainerLog = eleOverflowLocator();
                const isScrolledToBottom = eleContainerLog.scrollHeight - eleContainerLog.clientHeight <= eleContainerLog.scrollTop + 1;
                eleLog.innerHTML += output + '<br>';
                if (isScrolledToBottom) eleContainerLog.scrollTop = eleContainerLog.scrollHeight - eleContainerLog.clientHeight;
            } else eleLog.innerHTML += output + '<br>';
            console['old' + name].apply(undefined, arguments);
        };
    }
    function produceOutput(name, args) {
        return args.reduce((output, arg)=>{
            return output + '<span class="log-' + typeof arg + ' log-' + name + '">' + (typeof arg === 'object' ? JSON.stringify(arg) : arg) + '</span>&nbsp;';
        }, '');
    }
}

//# sourceMappingURL=index.377278e2.js.map
