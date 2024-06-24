import { zeroMatrix } from './1-8-zero-matrix';

describe('zeroMatrix', () => {
  it('should run', () => {
    const fns = [zeroMatrix];
    fns.forEach((fn) =>
      expect(
        fn([
          [1, 2, 3],
          [4, 0, 5],
          [6, 7, 8],
        ])
      ).toEqual([
        [1, 0, 3],
        [0, 0, 0],
        [6, 0, 8],
      ])
    );
  });
});
