import { Point, PointRange } from '../point';

describe('point range', () => {
  it('contains point', () => {
    const point1a = new Point([-1, 0]);
    const point1b = new Point([0, 2]);
    const point1c = new Point([1, 2]);
    const point1d = new Point([-1, -1]);
    const point1e = new Point([0, 0]);
    const point1f = new Point([0, 1]);
    const point1g = new Point([1, 0]);
    const point1h = new Point([1, 1]);
    const pointRange1 = new PointRange(new Point([0, 0]), new Point([1, 1]));
    const pointRange2 = new PointRange(new Point([1, 1]), new Point([0, 0]));

    expect(pointRange1.contains(point1a)).toBeFalsy();
    expect(pointRange1.contains(point1b)).toBeFalsy();
    expect(pointRange1.contains(point1c)).toBeFalsy();
    expect(pointRange1.contains(point1d)).toBeFalsy();

    expect(pointRange1.contains(point1e)).toBeTruthy();
    expect(pointRange1.contains(point1f)).toBeTruthy();
    expect(pointRange1.contains(point1g)).toBeTruthy();
    expect(pointRange1.contains(point1h)).toBeTruthy();

    expect(pointRange2.contains(point1a)).toBeFalsy();
    expect(pointRange2.contains(point1b)).toBeFalsy();
    expect(pointRange2.contains(point1c)).toBeFalsy();
    expect(pointRange2.contains(point1d)).toBeFalsy();

    expect(pointRange2.contains(point1e)).toBeTruthy();
    expect(pointRange2.contains(point1f)).toBeTruthy();
    expect(pointRange2.contains(point1g)).toBeTruthy();
    expect(pointRange2.contains(point1h)).toBeTruthy();
  });

  it('contains subrange', () => {
    const pointRange1 = new PointRange(new Point([0, 0]), new Point([1, 1]));
    const pointRange1a = new PointRange(new Point([1, 1]), new Point([0, 0]));
    const pointRange1b = new PointRange(new Point([0, 0]), new Point([1, 1]));
    const pointRange1c = new PointRange(new Point([-1, -1]), new Point([1, 1]));
    const pointRange1d = new PointRange(new Point([1, 1]), new Point([1, 2]));
    const pointRange1e = new PointRange(new Point([-1, -1]), new Point([0, 0]));
    expect(pointRange1.containsRange(pointRange1a)).toBeTruthy();
    expect(pointRange1.containsRange(pointRange1b)).toBeTruthy();
    expect(pointRange1.containsRange(pointRange1c)).toBeFalsy();
    expect(pointRange1.containsRange(pointRange1d)).toBeFalsy();
    expect(pointRange1.containsRange(pointRange1e)).toBeFalsy();
  });

  it('intersects subrange', () => {
    const pointRange1 = new PointRange(new Point([0, 0]), new Point([1, 1]));
    const pointRange1a = new PointRange(new Point([1, 1]), new Point([2, 2]));
    const pointRange1b = new PointRange(new Point([2, 2]), new Point([1, 1]));
    const pointRange1c = new PointRange(new Point([0, 0]), new Point([1, 1]));
    const pointRange1d = new PointRange(new Point([-1, -1]), new Point([-2, -2]));
    const pointRange1e = new PointRange(new Point([2, 2]), new Point([2, 3]));
    expect(pointRange1.intersects(pointRange1a)).toBeTruthy();
    expect(pointRange1.intersects(pointRange1b)).toBeTruthy();
    expect(pointRange1.intersects(pointRange1c)).toBeTruthy();
    expect(pointRange1.intersects(pointRange1d)).toBeFalsy();
    expect(pointRange1.intersects(pointRange1e)).toBeFalsy();

    const pointRange2 = new PointRange(new Point([6, 2]), new Point([7, 5]));
    const pointRange2b = new PointRange(new Point([10, 3.5]), new Point([2, 2]));
    expect(pointRange2.intersects(pointRange2b)).toBeTruthy();

    const pointRange3 = new PointRange(new Point([2, 4.5]), new Point([6, 6]));
    const pointRange3a = new PointRange(new Point([0, 5]), new Point([4.99, 10]));
    expect(pointRange3.intersects(pointRange3a)).toBeTruthy();
  });
});
