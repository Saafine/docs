import { rotateMatrix, rotateMatrix2 } from './1-7-rotate-matrix';

describe('rotateMatrix', () => {
  it('should run', () => {
    const fns = [rotateMatrix, rotateMatrix2];
    fns.forEach((fn) =>
      expect(
        fn([
          ['a', 'b', 'c'],
          ['d', 'e', 'f'],
          ['g', 'h', 'i'],
        ])
      ).toEqual([
        ['g', 'd', 'a'],
        ['h', 'e', 'b'],
        ['i', 'f', 'c'],
      ])
    );
  });
});
