export const getX = (p: Point) => p.getX();
export const getY = (p: Point) => p.getY();

export class Point {
  constructor(private coord: number[]) {}

  getX(): number {
    return this.coord[0] as number;
  }

  getY(): number {
    return this.coord[1] as number;
  }
}

export class PointRange {
  constructor(private from: Point, private to: Point) {}

  contains(point: Point): boolean {
    const isBetweenX = this.getMinX() <= point.getX() && point.getX() <= this.getMaxX();
    const isBetweenY = this.getMinY() <= point.getY() && point.getY() <= this.getMaxY();
    return isBetweenX && isBetweenY;
  }

  containsRange(range: PointRange): boolean {
    const containsFrom = this.contains(range.from);
    const containsTo = this.contains(range.to);
    return containsFrom && containsTo;
  }

  intersects(range: PointRange): boolean {
    const [left1, top1, right1, bottom1] = [this.getMinX(), this.getMaxY(), this.getMaxX(), this.getMinY()];
    const [left2, top2, right2, bottom2] = [range.getMinX(), range.getMaxY(), range.getMaxX(), range.getMinY()];

    return !(top1 < bottom2 || top2 < bottom1 || right1 < left2 || right2 < left1);
  }

  private getMaxX(): number {
    return Math.max(this.from.getX(), this.to.getX());
  }

  private getMinX(): number {
    return Math.min(this.from.getX(), this.to.getX());
  }

  private getMaxY(): number {
    return Math.max(this.from.getY(), this.to.getY());
  }

  private getMinY(): number {
    return Math.min(this.from.getY(), this.to.getY());
  }
}
