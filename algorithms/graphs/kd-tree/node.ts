import { Point } from './point';

export class Node {
  left: Node | null = null;
  right: Node | null = null;

  constructor(public point: Point, private parent: Node | null) {}

  isLeaf(): boolean {
    return !this.left && !this.right;
  }

  forEach(callback: (point: Point) => void) {
    callback(this.point);
    if (this.left) this.left.forEach(callback);
    if (this.right) this.right.forEach(callback);
  }
}
