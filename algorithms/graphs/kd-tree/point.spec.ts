import { Point, PointRange } from './point';

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
});
