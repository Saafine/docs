import { addBinary, addBinaryMatrix, BinaryMatrix } from './binary-adding';

describe('binary adding', () => {
    it('should sum binary matrix', () => {
        const inputA: BinaryMatrix = [
            [0, 1],
            [1, 1]
        ];

        const inputB: BinaryMatrix = [
            [1, 0],
            [0, 1]
        ];

        const result = addBinaryMatrix(inputA, inputB);
        expect(result).toEqual([[0, 1], [1, 1]]);
    });

    it('should add binary numbers', () => {
        const result = addBinary(1, 1);
        expect(result).toEqual([[0, 1], [1, 1]]);
    });
});
