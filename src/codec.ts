/*
syx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
# make at array of array of 8 item [[1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16]]
chk = [syx[i:i + 8] for i in range(0, len(syx), 8)]
lst = []
tmp = []
a = 0
for l in chk:
    for i in range(len(l)-1):
        a = l[i+1]
        a |= ((l[0] & (1<<i))>>i)<<7   
        tmp.append(a)
    lst.append(tmp)
    tmp = []
# flaten everthing
byt = [item for sublist in lst for item in sublist]
# result: [130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16]

header = (b'KORG'.ljust(16, b'\x00') + 
               b'electribe'.ljust(16, b'\x00') +
               b'\x01\x00\x00\x00'.ljust(224, b'\xff'))
*/
// too lazy to implement unit test
// const res = sys2pat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// console.log(res, res.toString() === [130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16].toString());

export function sys2pat(data: number[]) {
    // if data[6] == 0x4c: (edit given x pattern) should be 9 instead of 7
    const converted = sys2patConvert(data.slice(7, -1));

    // const ljust = (arr: number[], len: number, val: number) => [
    //     ...arr,
    //     ...Array(len).fill(val),
    // ];

    // const header = [
    //     ...ljust(
    //         [...'KORG'].map((c) => c.charCodeAt(0)),
    //         16,
    //         0x00,
    //     ),
    //     ...ljust(
    //         [...'electribe'].map((c) => c.charCodeAt(0)),
    //         16,
    //         0x00,
    //     ),
    //     ...ljust([0x01, 0x00, 0x00, 0x00], 224, 0xff),
    // ];
    const header = [
        75, 79, 82, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101,
        108, 101, 99, 116, 114, 105, 98, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255,
    ];

    return [...header, ...converted];
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
