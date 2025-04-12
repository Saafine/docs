import { checkPermutation } from './1-2-check-permutation';

describe('checkPermutation', () => {
    it('should run', () => {
        const fns = [checkPermutation]

        fns.forEach((fn) => expect(fn('abc', 'bac')).toBeTruthy())
        fns.forEach((fn) => expect(fn('abc', 'abc')).toBeTruthy())
        fns.forEach((fn) => expect(fn('abc', 'cab')).toBeTruthy())
        fns.forEach((fn) => expect(fn('abc', 'cba')).toBeTruthy())

        fns.forEach((fn) => expect(fn('abc', 'cabe')).toBeFalsy())
        fns.forEach((fn) => expect(fn('abc', 'abd')).toBeFalsy())
        fns.forEach((fn) => expect(fn('abc', 'cbb')).toBeFalsy())
        fns.forEach((fn) => expect(fn('abc', 'aaa')).toBeFalsy())
        fns.forEach((fn) => expect(fn('abc', 'abb')).toBeFalsy())
        fns.forEach((fn) => expect(fn('abc', 'xyz')).toBeFalsy())
    })
})
