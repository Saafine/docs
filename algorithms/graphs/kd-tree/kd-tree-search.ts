import { KdTree } from './kd-tree';
import { Point, PointRange } from './point';
import { Node } from './node';

export function kdTreeSearch(kdTree: KdTree, range: PointRange): Point[] {
  const pointsInRange: Point[] = [];

  function search(node: Node) {
    if (node.isLeaf()) {
      if (range.contains(node.point)) pointsInRange.push(node.point);
      return;
    }

    const regionLeft = node.left && new PointRange(node.point, node.left.point);
    const regionRight = node.right && new PointRange(node.point, node.right.point);

    if (regionLeft) {
      if (range.containsRange(regionLeft)) {
        node.forEach((point) => pointsInRange.push(point));
      } else if (range.intersects(regionLeft)) {
        search(node.left as Node);
      }
    }

    if (regionRight) {
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
