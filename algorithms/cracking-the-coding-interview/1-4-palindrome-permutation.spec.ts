import { isPalindromePermutation } from './1-4-palindrome-permutation';

describe('isPalindromePermutation', () => {
  it('should run', () => {
    const fns = [isPalindromePermutation];

    fns.forEach((fn) => expect(fn('Tact Coa')).toBeTruthy());
    fns.forEach((fn) => expect(fn('Tact Coa2')).toBeTruthy());
    fns.forEach((fn) => expect(fn('Tact C o a 2')).toBeTruthy());
  });
});
