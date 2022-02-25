// should move this to electribe-core

import { E2_BIN_HEADER, SYSEX_SEND_CURRENT_PATTERN } from 'electribe-core/dist';

// see https://github.com/bangcorrupt/e2-scripts

// too lazy to implement unit test
// const res = sys2pat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// console.log(res, res.toString() === [130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16].toString());

// const test = [...Array(10008)].map(e=>~~(Math.random()*127));
// const test = [...(<any>Array(102).keys())];
// const res = pat2sysConvert(sys2patConvert([...test]));
// checkDiff(test, res);

export function checkDiff(data: number[], result: number[], onlyDiff = false) {
    let diffCount = 0;
    data.forEach((value, i) => {
        const diff = value !== result[i];
        diff && diffCount++;
        (!onlyDiff || (diff && diffCount < 100)) &&
            console.log(i % 8, value, result[i], diff ? `<<<<< (${i})` : '');
    });
    console.log({ diffCount, dataLen: data.length });
}

// cmp -l 091_Basement3.e2pat  hello.e2pat
export function sys2pat(data: number[]) {
    const trimmedData = data.slice(SYSEX_SEND_CURRENT_PATTERN.length, -1);
    const converted = sys2patConvert(trimmedData);
    return [...E2_BIN_HEADER, ...converted];
}

function sys2patConvert(data: number[]) {
    const chunks = chunk(data, 8);
    return chunks.flatMap(([first, ...values]) =>
        (<number[]>values).map((a, i) => a | (((first & (1 << i)) >> i) << 7)),
    );
}

export function pat2sys(data: number[]) {
    const trimmedData = data.slice(E2_BIN_HEADER.length);
    const converted = pat2sysConvert(trimmedData);
    return [...SYSEX_SEND_CURRENT_PATTERN, ...converted, 0xf7];
}

function pat2sysConvert(data: number[]) {
    const chunks = chunk(data, 7);
    return chunks.flatMap((values) => {
        let first = 0;
        const rest = (<number[]>values).map((a, i) => {
            first |= (a & 128) >> (7 - i); // 128 = 1 << 7 = Math.pow(2, 7) = 2*2*2*2*2*2*2
            return a & ~128;
        });
        return [first, ...rest];
    });
}

function chunk(data: number[], chunkSize: number) {
    const res = [];
    while (data.length > 0) {
        const chunk = data.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}
