import { isRotation, isRotation2, isRotation3 } from './1-9-string-rotation';

describe('isSubstring', () => {
  it('should run', () => {
    const fns = [isRotation, isRotation2, isRotation3];
    fns.forEach((fn) => expect(fn('abc', 'cba')).toBeFalsy());
    fns.forEach((fn) => expect(fn('abc', 'bca')).toBeTruthy());
    fns.forEach((fn) => expect(fn('waterbottle', 'erbottlewat')).toBeTruthy());
  });
});
