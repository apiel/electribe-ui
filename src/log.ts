rewireLoggingToElement();

function rewireLoggingToElement() {
    fixLoggingFunc('log');
    fixLoggingFunc('debug');
    fixLoggingFunc('warn');
    fixLoggingFunc('error');
    fixLoggingFunc('info');

    const eleLog = document.getElementById('log');

    document.getElementById('toggleLog').onclick = () => {
        eleLog.style.display =
            eleLog.style.display === 'none' ? 'block' : 'none';
    };

    function fixLoggingFunc(name: string) {
        console['old' + name] = console[name];
        console[name] = function (...params: any[]) {
            const output = produceOutput(name, params);
            eleLog.innerHTML += output + '<br>';

            console['old' + name].apply(undefined, params);
        };
    }

    function produceOutput(name: string, args: any[]) {
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
