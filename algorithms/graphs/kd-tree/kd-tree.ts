import { getX, getY, Point } from './point';
import { Node } from './node';
import { sortBy } from 'lodash';

export type KdTree = Node;

export function kdTree(points: Point[]): KdTree {
  return buildTree(points, 0) as KdTree;
}

function buildTree(points: Point[], depth: number): Node | null {
  if (points.length === 0) return null;
  if (points.length === 1) return new Node(points[0] as Point);

  points = depth % 2 ? sortBy(points, getX) : sortBy(points, getY);

  const mid = Math.floor(points.length / 2);
  const node = new Node(points[mid] as Point);
  node.left = buildTree(points.slice(0, mid), depth + 1);
  node.right = buildTree(points.slice(mid + 1), depth + 1);

  return node;
}
