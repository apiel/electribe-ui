// should move this to electribe-core

import { E2_BIN_HEADER, SYSEX_SEND_CURRENT_PATTERN } from 'electribe-core/dist';

// see https://github.com/bangcorrupt/e2-scripts

// too lazy to implement unit test
// const res = sys2pat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// console.log(res, res.toString() === [130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16].toString());

// cmp -l 091_Basement3.e2pat  hello.e2pat
export function sys2pat(data: number[]) {
    const trimmedData = data.slice(SYSEX_SEND_CURRENT_PATTERN.length - 1, -1);

    return [...E2_BIN_HEADER, ...sys2patConvert(trimmedData)];
}

function sys2patConvert(data: number[]) {
    const chunks = chunk(data, 8);
    return chunks.flatMap(([first, ...values]) =>
        (<number[]>values).map((a, i) => a | (((first & (1 << i)) >> i) << 7)),
    );
}

function chunk(data: number[], chunkSize: number) {
    const res = [];
    while (data.length > 0) {
        const chunk = data.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

export function pat2sys(data: number[]) {
    const trimmedData = data.slice(E2_BIN_HEADER.length - 1);
    const converted = pat2sysConvert(trimmedData);

    return [...SYSEX_SEND_CURRENT_PATTERN, ...converted, 0xf7];
}

// let res = pat2sysConvert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// console.log(res, res.toString() === [0, 1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10, 11, 12, 13, 14, 0, 15, 16].toString());
// res = pat2sysConvert([130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16]);
// console.log(res, res.toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].toString());
// const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// res = sys2patConvert(pat2sysConvert(testData));
// console.log(res, res.toString() === testData.toString());

function pat2sysConvert(data: number[]) {
    let lim = 0;
    let b = 0;
    let tmp: number[] = [];
    return data.flatMap((e, i) => {
        const cnt = 6 - (i % 7);
        tmp.push(e & ~0b10000000);
        b |= (e & 0b10000000) >> (cnt + 1);
        if (cnt === lim) {
            if (data.length - i < 7) {
                lim = 7 - (data.length - i) + 1;
            }
            const res = [b, ...tmp];
            tmp = [];
            b = 0;
            return res;
        }
        return [];
    });
}

// function pat2sysConvert(data: number[]) {
//     let lng = data.length;
//     let lim = 0;
//     let b = 0;
//     let cnt = 7;
//     let tmp: any[] = [];
//     let lst: any[] = [];
//     data.forEach((e, i) => {
//         const a = e & ~0b10000000;
//         b |= (e & 0b10000000) >> cnt;
//         tmp.push(a);
//         cnt -= 1;
//         if (lng < 7) {
//             lim = 7 - lng;
//         }
//         if (cnt === lim) {
//             lst.push([b]);
//             lst.push(tmp);
//             tmp = [];
//             b = 0;
//             cnt = 7;
//             if (lng - i < 7) {
//                 lim = 7 - (lng - i) + 1;
//             }
//         }
//     });
//     return lst.flat();
// }
