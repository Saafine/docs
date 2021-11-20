import { getX, getY, Point } from './point';
import { Node } from './node';
import { sortBy } from 'lodash';

export type KdTree = Node;

export function kdTree(points: Point[]): KdTree | null {
  return buildTree(points, 0, null) as KdTree | null;
}

function buildTree(points: Point[], depth: number, parent: Node | null): Node | null {
  if (points.length === 0) return null;
  if (points.length === 1) return new Node(points[0] as Point, parent);

  points = depth % 2 ? sortBy(points, getX) : sortBy(points, getY);

  const mid = Math.floor(points.length / 2);
  const node = new Node(points[mid] as Point, parent);
  node.left = buildTree(points.slice(0, mid), depth + 1, node);
  node.right = buildTree(points.slice(mid + 1), depth + 1, node);

  return node;
}
