import { Binary } from './binary-adding';
import { addBinarySuboptimal } from './add-binary-not-optimal-suffix';

describe('add binary not optimal', () => {
    it('should calc', () => {
        const binaryOne: Binary[] = [null, 1, 1, 0, 1, 0, 1, 0, 1];
        const binaryTwo: Binary[] = [null, 1, 0, 1, 0, 1, 1, 1, 1];
        const result = addBinarySuboptimal(binaryOne, binaryTwo);
        expect(result).toEqual([1, 1, 0, 0, 0, 0, 1, 0, 0]);
    });
});
