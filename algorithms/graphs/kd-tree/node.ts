import { Point, PointRange } from './point';

const isDefined = (val: number | undefined): val is number => typeof val == 'number';

export class Node {
  left: Node | null = null;
  right: Node | null = null;

  constructor(public point: Point) {}

  isLeaf(): boolean {
    return !this.left && !this.right;
  }

  getRegion(): PointRange {
    const maxX = this.getMaxX();
    const maxY = this.getMaxY();

    const minX = this.getMinX();
    const minY = this.getMinY();

    return new PointRange(new Point([minX, minY]), new Point([maxX, maxY]));
  }

  getMaxX(): number {
    const values = [this.point.getX(), this.left?.getMaxX(), this.right?.getMaxX()].filter(isDefined);
    return Math.max(...values);
  }

  getMinX(): number {
    const values = [this.point.getX(), this.left?.getMinX(), this.right?.getMinX()].filter(isDefined);
    return Math.min(...values);
  }

  getMaxY(): number {
    const values = [this.point.getY(), this.left?.getMaxY(), this.right?.getMaxY()].filter(isDefined);
    return Math.max(...values);
  }

  getMinY(): number {
    const values = [this.point.getY(), this.left?.getMinY(), this.right?.getMinY()].filter(isDefined);
    return Math.min(...values);
  }

  forEach(callback: (point: Point) => void) {
    callback(this.point);
    if (this.left) this.left.forEach(callback);
    if (this.right) this.right.forEach(callback);
  }
}
