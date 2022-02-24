rewireLoggingToElement(
    () => document.getElementById('log'),
    () => document.getElementById('logContainer'),
    true,
);

function rewireLoggingToElement(eleLocator, eleOverflowLocator, autoScroll) {
    fixLoggingFunc('log');
    fixLoggingFunc('debug');
    fixLoggingFunc('warn');
    fixLoggingFunc('error');
    fixLoggingFunc('info');

    function fixLoggingFunc(name: string) {
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
