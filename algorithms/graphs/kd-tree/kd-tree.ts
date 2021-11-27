import { getX, getY, Point } from './point';
import { Node } from './node';
import { sortBy } from 'lodash';

export type KdTree = Node;

export function kdTree(points: Point[]): KdTree {
  const tree = buildTree(points, 0) as KdTree;
  tree.setRegion();
  return tree;
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

export function kdTree2(input: Point[]): KdTree {
  const Sx = sortBy(input, (p: Point) => p.getX());
  const Sy = sortBy(input, (p: Point) => p.getY());
  const tree = buildTree2(Sx, Sy, 0) as KdTree;
  tree.setRegion();
  return tree;
}

function buildTree2(Sx: Point[], Sy: Point[], depth: number): Node | null {
  if (Sx.length === 0) return null;
  if (Sx.length === 1) return new Node(Sx[0] as Point);
  const isEven = depth % 2 === 0;
  const points = isEven ? Sx : Sy;
  const mid = Math.floor(points.length / 2);
  const node = new Node(points[mid] as Point);

  const sxLeft = isEven ? Sx.slice(0, mid) : splitReduced(Sx, mid, (point, mid) => point.getY() <= mid.getY()).left;
  const sxRight = isEven ? Sx.slice(mid + 1) : splitReduced(Sx, mid, (point, mid) => point.getY() <= mid.getY()).right;

  const syLeft = isEven ? splitReduced(Sy, mid, (point, mid) => point.getX() <= mid.getX()).left : Sy.slice(0, mid);
  const syRight = isEven ? splitReduced(Sy, mid, (point, mid) => point.getX() <= mid.getX()).right : Sy.slice(mid + 1);

  node.left = buildTree2(sxLeft, syLeft, depth + 1);
  node.right = buildTree2(sxRight, syRight, depth + 1);

  return node;
}

function splitReduced(input: Point[], midIndex: number, compareFn: (point: Point, mid: Point) => boolean) {
  let left: Point[] = [];
  let right: Point[] = [];

  let count1 = 0;
  let count2 = 0;

  for (let point of input) {
    count1++;
    if (input[midIndex] && compareFn(point, input[midIndex] as Point)) {
      left.push(point);
      count2++;
    } else {
      right.push(point);
    }

    if (count2 > midIndex) {
      const points: Point[] = input.slice(-count1 - 1);
      right = right.concat(points);
      break;
    }
  }

  return { left, right };
}
