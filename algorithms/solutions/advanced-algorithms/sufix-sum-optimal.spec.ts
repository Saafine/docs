import { calculateSuffixSumUsingOptimalAlgorithm } from './sufix-sum-optimal';

describe('calculateSuffixSumUsingOptimalAlgorithm', () => {
    it('should solve', () => {
        const result = calculateSuffixSumUsingOptimalAlgorithm([null, 1, 1, 2, 2, 3, 8, 7, 3]);
       expect(result).toEqual([
           [undefined, 27, 26, 25, 23, 21, 18, 10, 3],
           [null, 27, 25, 21, 10],
           [null, 27, 21],
           [null, 27]
       ])
    });
});
