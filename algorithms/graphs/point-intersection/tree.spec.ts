import { Point } from './point';
import { getSegmentPoints, intersections } from './tree';
import { PointType, Segment, SegmentPoint } from './model';
import { input as input_001 } from './inputs/001';
import { input as input_002 } from './inputs/002';
import { input as input_003 } from './inputs/003';

describe('test tree', () => {
  it('should find intersection points', () => {
    expect(intersections(input_001)).toHaveLength(0);
    expect(intersections(input_002)).toHaveLength(4);
    expect(intersections(input_003)).toHaveLength(20);
  });

  describe('sorting segments', () => {
    it('should return sorted segments (1)', () => {
      // pionowe, x = const
      const verticals: Segment[] = [
        {
          from: new Point([1, 1]),
          to: new Point([1, 2]),
        },
        {
          from: new Point([1, 3]),
          to: new Point([1, 4]),
        },
      ];

      // poziome, y = const
      const horizontals: Segment[] = [
        {
          from: new Point([1, 5]),
          to: new Point([2, 5]),
        },
        {
          from: new Point([3, 5]),
          to: new Point([4, 5]),
        },
      ];

      const result = getSegmentPoints({ verticals, horizontals });
      const expected: SegmentPoint[] = [
        {
          x: 1,
          source: horizontals[0] as Segment,
          type: PointType.HORIZONTAL_LEFT,
        },
        {
          x: 1,
          source: verticals[0] as Segment,
          type: PointType.VERTICAL,
        },
        {
          x: 1,
          source: verticals[1] as Segment,
          type: PointType.VERTICAL,
        },
        {
          x: 2,
          source: horizontals[0] as Segment,
          type: PointType.HORIZONTAL_RIGHT,
        },
        {
          x: 3,
          source: horizontals[1] as Segment,
          type: PointType.HORIZONTAL_LEFT,
        },
        {
          x: 4,
          source: horizontals[1] as Segment,
          type: PointType.HORIZONTAL_RIGHT,
        },
      ];

      expect(result).toHaveLength(6);
      expect(result).toEqual(expected);
    });
  });
});
