export type Binary = 0 | 1;
export type BinaryMatrix = Array<Binary[]>

export function addBinary(a: Binary, b: Binary): BinaryMatrix {
    if (a === 0 && b === 0) return [[0, 0], [1, 0]];
    if ((a === 1 && b === 0) || (a === 0 && b === 1)) return [[1, 0], [0, 1]];
    if (a === 1 && b === 1) return [[0, 1], [1, 1]];
    throw new Error('Invalid arguments');
}

export function addBinaryMatrix(matrixA: BinaryMatrix, matrixB: BinaryMatrix): BinaryMatrix {
    const [a, b] = matrixA[0];
    const [c, d] = matrixA[1];

    const [, f] = matrixB[0];
    const [, h] = matrixB[1];

    const [x, y] = f === 0 ? [a, b] : [c, d];
    const [z, w] = h === 0 ? [a, b] : [c, d];

    return [
        [x, y],
        [z, w]
    ];
}

export function formatMatrix() {
    const input: BinaryMatrix[] = [
        [[0, 1], [0, 1]],
        [[1, 0], [1, 0]],
        [[1, 0], [1, 0]],
        [[1, 0], [1, 0]],
        [[1, 0], [1, 0]],
        [[1, 0], [1, 0]],
        [[0, 1], [0, 1]],
        [[0, 1], [1, 1]]
    ];

    const result = input.forEach((matrix) => {
        const [row1, row2] = matrix;
        console.log(row1);
        console.log(row2);
    });
}

// formatMatrix();
