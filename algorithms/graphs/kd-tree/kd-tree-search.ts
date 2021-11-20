import { KdTree } from './kd-tree';
import { Point, PointRange } from './point';
import { Node } from './node';

// TODO [P. Labus] parent not needed

export function kdTreeSearch(kdTree: KdTree, range: PointRange): Point[] {
  console.log(range);
  const pointsInRange: Point[] = [];
  function search(node: Node) {
    if (node.isLeaf()) {
      console.log({ leaf: range.contains(node.point), point: node.point });
      if (range.contains(node.point)) pointsInRange.push(node.point);
      return;
    }

    const regionLeft = node.left && new PointRange(node.point, node.left.point);
    const regionRight = node.right && new PointRange(node.point, node.right.point);

    if (regionLeft) {
      console.log({
        intersectsLeft: range.intersects(regionLeft),
        regionLeft,
        contains: range.containsRange(regionLeft),
      });
      if (range.containsRange(regionLeft)) {
        node.forEach((point) => pointsInRange.push(point));
      } else if (range.intersects(regionLeft)) {
        console.log({ searchLeft: node.left });
        search(node.left as Node);
      }
    }

    if (regionRight) {
      console.log({
        intersectsRight: range.intersects(regionRight),
        regionRight,
        contains: range.containsRange(regionRight),
      });
      if (range.containsRange(regionRight)) {
        node.forEach((point) => pointsInRange.push(point));
      } else if (range.intersects(regionRight)) {
        search(node.right as Node);
      }
    }
  }

  search(kdTree);

  return pointsInRange;
}
