import { Node } from './node';
import { getKthToLast, getKthToLast2 } from './2-2-return-kth-to-last';

describe('getKthToLast', () => {
  it('should run', () => {
    const fns = [getKthToLast, getKthToLast2];
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);

    a.next = b;
    b.next = c;

    fns.forEach((_fn) => {
      const result1 = _fn(a, 0);
      const result2 = _fn(a, 1);
      const result3 = _fn(a, 2);
      const result4 = _fn(a, 3);
      const result5 = _fn(a, -1);

      expect(result1).toEqual(c);
      expect(result2).toEqual(b);
      expect(result3).toEqual(a);
      expect(result4).toBeFalsy();
      expect(result5).toBeFalsy();
    });
  });
});
