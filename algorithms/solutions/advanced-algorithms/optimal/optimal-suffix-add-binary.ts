import { addBinary, addBinaryMatrix, Binary } from '../binary-adding';

export function addBinaryOptimal(binaryA: Binary[], binaryB: Binary[]) {
    const n = binaryA.length - 1;

    const logn = Math.log2(n);
    let B = Array(logn + 1).fill(null).map(() => []);
    let C = Array(logn + 1).fill(null).map(() => []);

    B[0] = binaryA.map((binA, index) => {
        if (index === 0) return null;
        return addBinary(binA, binaryB[index]);
    })


    // console.log("Etap 0: ", JSON.stringify(B));

    // https://i.imgur.com/Dhq6oje.png
    for (let h = 1; h <= logn; h++) {
        const tempB = JSON.parse(JSON.stringify(B));
        for (let j = 1; j <= n / Math.pow(2, h); j++) {
            tempB[h][j] = addBinaryMatrix(B[h - 1][2 * j - 1], B[h - 1][2 * j]);
        }
        B = tempB;
    }

    const BCOPY = JSON.parse(JSON.stringify(B));
    for (let h = logn; h >= 0; h--) {
        const tempC = JSON.parse(JSON.stringify(C));
        for (let j = 1; j <= n / Math.pow(2, h); j++) {
            if (j === n / Math.pow(2, h)) {
                tempC[h][j] = JSON.parse(JSON.stringify(BCOPY[h][j]));
            } else if (j % 2 !== 0) {
                tempC[h][j] = JSON.parse(JSON.stringify(C[h + 1][(j + 1)/2]));
            } else {
                tempC[h][j] = addBinaryMatrix(BCOPY[h][j], C[h + 1][(j + 2) / 2]);
            }
        }
        C = tempC;
    }

    return C[0].filter((x) => !!x).map(([upperRow], index) => {
        const [x, y] = upperRow;
        if (index === 0) return [y, x];
        return x;
    }).join().split(',').map(Number);
}
