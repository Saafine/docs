import { KdTree } from './kd-tree';
import { Point, PointRange } from './point';
import { Node } from './node';

export function kdTreeSearch(kdTree: KdTree, range: PointRange): Point[] {
  const pointsInRange: Point[] = [];

  function search(node: Node) {
    const region = node.getRegion();
    if (!region.intersects(range)) return;
    if (region.contains(node.point)) pointsInRange.push(node.point);
    if (node.left) search(node.left);
    if (node.right) search(node.right);
  }

  search(kdTree);

  return pointsInRange;
}
