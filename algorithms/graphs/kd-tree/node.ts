import { Point, PointRange } from './point';

const isDefined = (val: number | undefined): val is number => typeof val == 'number';

export class Node {
  left: Node | null = null;
  right: Node | null = null;

  maxX: number | null = null;
  minX: number | null = null;
  maxY: number | null = null;
  minY: number | null = null;

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
    if (this.maxX !== null) return this.maxX;
    const values = [this.point.getX(), this.left?.getMaxX(), this.right?.getMaxX()].filter(isDefined);
    this.maxX = Math.max(...values);
    return this.maxX;
  }

  getMinX(): number {
    if (this.minX !== null) return this.minX;
    const values = [this.point.getX(), this.left?.getMinX(), this.right?.getMinX()].filter(isDefined);
    this.minX = Math.min(...values);
    return this.minX;
  }

  getMaxY(): number {
    if (this.maxY !== null) return this.maxY;
    const values = [this.point.getY(), this.left?.getMaxY(), this.right?.getMaxY()].filter(isDefined);
    this.maxY = Math.max(...values);
    return this.maxY;
  }

  getMinY(): number {
    if (this.minY !== null) return this.minY;
    const values = [this.point.getY(), this.left?.getMinY(), this.right?.getMinY()].filter(isDefined);
    this.minY = Math.min(...values);
    return this.minY;
  }

  forEach(callback: (point: Point) => void) {
    callback(this.point);
    if (this.left) this.left.forEach(callback);
    if (this.right) this.right.forEach(callback);
  }
}
