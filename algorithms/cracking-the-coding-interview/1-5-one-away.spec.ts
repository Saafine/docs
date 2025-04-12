import { isOneAway } from './1-5-one-away';

describe('One Away', () => {
  it('should run', () => {
    const fns = [isOneAway];

    fns.forEach((fn) => expect(fn('pale', 'ple')).toBeTruthy());
    fns.forEach((fn) => expect(fn('pales', 'pale')).toBeTruthy());
    fns.forEach((fn) => expect(fn('pale', 'bale')).toBeTruthy());
    fns.forEach((fn) => expect(fn('pale', 'bake')).toBeFalsy());

    // Additional test cases
    fns.forEach((fn) => expect(fn('pale', 'pales')).toBeTruthy());
    fns.forEach((fn) => expect(fn('pale', 'pale')).toBeTruthy());
    fns.forEach((fn) => expect(fn('a', '')).toBeTruthy());
    fns.forEach((fn) => expect(fn('', 'a')).toBeTruthy());

    fns.forEach((fn) => expect(fn('pale', 'paless')).toBeFalsy());
    fns.forEach((fn) => expect(fn('pale', 'ppale')).toBeTruthy());
    fns.forEach((fn) => expect(fn('pale', 'bae')).toBeFalsy());
    fns.forEach((fn) => expect(fn('pale', 'p')).toBeFalsy());

    fns.forEach((fn) => expect(fn('', '')).toBeTruthy());
    fns.forEach((fn) => expect(fn('a', 'b')).toBeTruthy());
    fns.forEach((fn) => expect(fn('abc', 'ab')).toBeTruthy());
    fns.forEach((fn) => expect(fn('ab', 'abc')).toBeTruthy());
    fns.forEach((fn) => expect(fn('ab', 'ac')).toBeTruthy());
    fns.forEach((fn) => expect(fn('ab', 'a')).toBeTruthy());

    fns.forEach((fn) => expect(fn('abcdef', 'abcdeg')).toBeTruthy());
    fns.forEach((fn) => expect(fn('abcdef', 'abcdgf')).toBeTruthy());
    fns.forEach((fn) => expect(fn('abcdef', 'abcdefg')).toBeTruthy());
    fns.forEach((fn) => expect(fn('abcdef', 'abcdfg')).toBeFalsy());
    fns.forEach((fn) => expect(fn('abcdef', 'abcfef')).toBeTruthy());
    fns.forEach((fn) => expect(fn('abcdef', 'abcfdef')).toBeTruthy());
  });
});
