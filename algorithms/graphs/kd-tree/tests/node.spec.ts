import { Node } from '../node';
import { Point } from '../point';

describe('node', () => {
  it('should report subtree', () => {
    const points: Point[] = [];
    const node = new Node(new Point([0, 0]));
    node.left = new Node(new Point([1, 0]));
    node.right = new Node(new Point([0, 1]));
    node.forEach((point) => points.push(point));

    expect(points).toEqual([node.point, node.left.point, node.right.point]);
  });
});
