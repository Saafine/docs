import { getX, getY, Point } from './point';
import { Node } from './node';
import { partition, sortBy } from 'lodash';

export type KdTree = Node;

export function kdTree(points: Point[]): KdTree {
  return buildTree(points, 0) as KdTree;
}

function buildTree(points: Point[], depth: number): Node | null {
  if (points.length === 0) return null;
  if (points.length === 1) return new Node(points[0] as Point);

  points = depth % 2 ? sortBy(points, getX) : sortBy(points, getY); // O(nlogn) -> O(n), mediana
  // prostokaty do konstrukcji drzewa
  const mid = Math.floor(points.length / 2);
  const node = new Node(points[mid] as Point);
  node.left = buildTree(points.slice(0, mid), depth + 1);
  node.right = buildTree(points.slice(mid + 1), depth + 1);

  return node;
}

export function kdTree2(input: Point[]): KdTree {
  const Sx = sortBy(input, (p: Point) => p.getX());
  const Sy = sortBy(input, (p: Point) => p.getY());
  return buildTree2(Sx, Sy, 0) as KdTree;
}

function buildTree2(Sx: Point[], Sy: Point[], depth: number): Node | null {
  if (Sx.length === 0) return null;
  if (Sx.length === 1) return new Node(Sx[0] as Point);
  const isEven = depth % 2 === 0;
  const points = isEven ? Sx : Sy;
  const mid = Math.floor(points.length / 2);
  const node = new Node(points[mid] as Point);

  const sxLeft = Sx.slice(0, mid);
  const sxRight = Sx.slice(-mid);
  let syLeft: Point[] = [];
  let syRight: Point[] = [];

  let counter1 = 0;
  let counter2 = 0;

  for (let point of Sy) {
    counter1++;

    if (point.getX() <= (sxLeft[mid] as Point).getX()) {
      syLeft.push(point);
      counter2++;
    } else {
      syRight.push(point);
    }

    if (counter2 > mid) {
      const points: Point[] = Sy.slice(-counter1 - 1);
      syRight = syRight.concat(points);
      break;
    }
  }

  node.left = buildTree2(sxLeft, syLeft, depth + 1);
  node.right = buildTree2(sxRight, syRight, depth + 1);

  return node;
}
