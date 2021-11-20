import { KdTree } from './kd-tree';
import { Point, PointRange } from './point';
import { Node } from './node';

export function kdTreeSearch(kdTree: KdTree, range: PointRange): Point[] {
  const pointsInRange: Point[] = [];

  function search(node: Node) {
    if (node.isLeaf()) {
      if (range.contains(node.point)) pointsInRange.push(node.point);
      return;
    } else {
      const subRange = new PointRange(node.left?.point as Point, node.right?.point as Point)

      if (range.containsRange(subRange)) {
        node.forEach((point) => pointsInRange.push(node.point))
      } else {
        
      }

    }
  }

  return pointsInRange;
}
