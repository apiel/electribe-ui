// should move this to electribe-core

import {
    E2_BIN_HEADER,
    E2_SYSEX_HEADER,
    SYSEX_SEND_CURRENT_PATTERN,
} from 'electribe-core/dist';

// see https://github.com/bangcorrupt/e2-scripts

// too lazy to implement unit test
// const res = sys2pat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// console.log(res, res.toString() === [130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16].toString());

// const test = [...Array(10008)].map(e=>~~(Math.random()*127));
// const test = [...(<any>Array(102).keys())];
// const res = pat2sysConvert(sys2patConvert([...test]));
// checkDiff(test, res);

function checkDiff(data: number[], result: number[], onlyDiff = false) {
    let diffCount = 0;
    data.forEach((value, i) => {
        const diff = value !== result[i];
        diff && diffCount++;
        (!onlyDiff || diff) &&
            console.log(i % 8, value, result[i], diff ? `<<<<< (${i})` : '');
    });
    console.log({ diffCount, dataLen: data.length });
}

// cmp -l 091_Basement3.e2pat  hello.e2pat
export function sys2pat(data: number[]) {
    const trimmedData = data.slice(SYSEX_SEND_CURRENT_PATTERN.length - 1, -1);
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
    const trimmedData = data.slice(E2_BIN_HEADER.length - 1);
    const converted = pat2sysConvert(trimmedData);
    return [...SYSEX_SEND_CURRENT_PATTERN, ...converted, 0xf7];
}

function pat2sysConvert(data: number[]) {
    const chunks = chunk(data, 7);
    return chunks.flatMap((values) => {
        let first = 0;
        const rest = (<number[]>values).map((a, i) => {
            first |= (a & 128) >> (7 - i); // 128 = 1 << 7 = Math.pow(2, 7) = 2*2*2*2*2*2*2
            // first |= (a & (1 << 7)) >> (7 - i);
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

// function pat2sysConvert4(data: number[]) {
//     let lim = 0;
//     let b = 0;
//     let tmp: number[] = [];
//     return data.flatMap((e, i) => {
//         const cnt = 6 - (i % 7);
//         tmp.push(e & ~0b10000000);
//         b |= (e & 0b10000000) >> (cnt + 1);
//         if (cnt === lim) {
//             if (data.length - i < 7) {
//                 lim = 7 - (data.length - i) + 1;
//             }
//             const res = [b, ...tmp];
//             tmp = [];
//             b = 0;
//             return res;
//         }
//         return [];
//     });
// }

// function pat2sysConvert3(data: number[]) {
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

// function sys2patConvert(data: number[]) {
//     const chunks = chunk(data, 8);
//     return chunks.flatMap(([first, ...values]) =>
//         (<number[]>values).map((a, i) => {
//             console.log(
//                 i,
//                 a | (((first & (1 << i)) >> i) << 7),
//                 a,
//                 first,
//                 ((first & (1 << i)) >> i) << 7,
//                 (first & (1 << i)) >> i,
//                 first & (1 << i),
//                 1 << i
//             );
//             return a | (((first & (1 << i)) >> i) << 7);
//         }),
//     );
// }
