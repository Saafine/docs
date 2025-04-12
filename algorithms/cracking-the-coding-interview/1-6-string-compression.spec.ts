import { stringCompression, stringCompression2 } from './1-6-string-compression';

describe('stringCompression', () => {
  it('should run', () => {
    const fns = [stringCompression, stringCompression2];
    fns.forEach((fn) => expect(fn('aabcccccaaa')).toEqual('a2b1c5a3'));
    fns.forEach((fn) => expect(fn('a')).toEqual('a'));
    fns.forEach((fn) => expect(fn('ab')).toEqual('ab'));
    fns.forEach((fn) => expect(fn('')).toEqual(''));
  });
});
