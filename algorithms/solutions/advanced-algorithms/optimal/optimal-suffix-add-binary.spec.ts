import { Binary } from '../binary-adding';
import { addBinaryOptimal } from './optimal-suffix-add-binary';

describe('add binary optimal', () => {
    it('should calc', () => {
        const binaryOne: Binary[] = [null, 1, 1, 0, 1, 1, 0, 1, 1];
        const binaryTwo: Binary[] = [null, 1, 0, 1, 1, 0, 1, 0, 1];
        const result = addBinaryOptimal(binaryOne, binaryTwo);
        expect(result).toEqual([1, 1, 0, 0, 1, 0, 0, 0, 0]);
    });
});
