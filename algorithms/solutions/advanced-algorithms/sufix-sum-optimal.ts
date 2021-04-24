export function calculateSuffixSumUsingOptimalAlgorithm(A: number[]) {
    const n = A.length - 1;

    const logn = Math.log2(n);
    let B = Array(logn + 1).fill(null).map(() => []);
    let C = Array(logn + 1).fill(null).map(() => []);

    // Etap 0
    B[0] = JSON.parse(JSON.stringify(A));

    // console.log("Etap 0: ", B);

    for (let h = 1; h <= logn; h++) {
        const tempB = JSON.parse(JSON.stringify(B));
        for (let j = 1; j <= n / Math.pow(2, h); j++) {
            tempB[h][j] = B[h - 1][2 * j - 1] + B[h - 1][2 * j];
        }
        B = tempB;
    }

    // See https://i.imgur.com/J4Q8giD.png
    // console.log(`Etapy od 0 do ${logn}:`, B);

    const BCOPY = JSON.parse(JSON.stringify(B));
    for (let h = logn; h >= 0; h--) {
        const tempC = JSON.parse(JSON.stringify(C));
        for (let j = 1; j <= n / Math.pow(2, h); j++) {
            if (j === n / Math.pow(2, h)) {
                tempC[h][j] = BCOPY[h][j];
            } else if (j % 2 !== 0) {
                tempC[h][j] = C[h + 1][(j + 1)/2]
            } else {
                tempC[h][j] = BCOPY[h][j] + C[h + 1][(j + 2) / 2];
            }
        }
        C = tempC;
    }

    return C;
}
