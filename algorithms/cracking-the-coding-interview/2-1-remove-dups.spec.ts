import { removeDups, removeDups2 } from './2-1-remove-dups';
import { Node } from './node';

describe('removeDups', () => {
  it('should run', () => {
    const fns = [removeDups, removeDups2];
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);

    a.next = b;
    b.next = c;

    fns.forEach((_removeDups) => {
      const result = _removeDups(a);

      expect(result.data).toEqual(1);
      expect(result.next?.data).toEqual(2);
      expect(result.next?.next?.data).toEqual(3);
    });
  });

  it('should run (2)', () => {
    const fns = [removeDups, removeDups2];
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(3);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    fns.forEach((_removeDups) => {
      const result = _removeDups(a);

      expect(result.data).toEqual(1);
      expect(result.next?.data).toEqual(2);
      expect(result.next?.next?.data).toEqual(3);
      expect(result.next?.next?.next?.data).toEqual(4);
      expect(result.next?.next?.next?.next).toBeNull();
    });
  });
});
