import { isInRange } from '../closest-pair.utils';

describe('closest pair utils', () => {
  describe('points in range', () => {
    it('should test', () => {
      expect(isInRange(10, 20, 5)).toBeFalsy();
      expect(isInRange(10, 20, 9)).toBeFalsy();
      expect(isInRange(-10, 20, 10)).toBeFalsy();
      expect(isInRange(11, -7, 16)).toBeFalsy();

      expect(isInRange(10, 20, 10)).toBeTruthy();
      expect(isInRange(19, 20, 1)).toBeTruthy();
      expect(isInRange(20, 18, 2)).toBeTruthy();
      expect(isInRange(20, 18, 3)).toBeTruthy();
      expect(isInRange(-11, -10, 3)).toBeTruthy();
      expect(isInRange(-11, -7, 4)).toBeTruthy();
      expect(isInRange(11, -7, 18)).toBeTruthy();
    });
  });
});
