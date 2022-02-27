const eleLog = document.getElementById('log');

if (new URLSearchParams(window.location.search).get('log') !== null) {
    eleLog.style.display = 'block';
}

rewireLoggingToElement();

function rewireLoggingToElement() {
    fixLoggingFunc('log');
    fixLoggingFunc('debug');
    fixLoggingFunc('warn');
    fixLoggingFunc('error');
    fixLoggingFunc('info');

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
