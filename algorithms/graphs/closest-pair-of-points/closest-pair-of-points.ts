import { Point } from './point';
import { isNil, minBy, sortBy } from 'lodash';
import { getDistance } from './point.utils';
import { PointPair } from './closest-pair.model';
import { getPointDistance, isInRange } from './closest-pair.utils';

export function closestPairOfPoints(input: Point[]): PointPair {
  const Sx = sortBy(input, (p: Point) => p.getX());
  const Sy = sortBy(input, (p: Point) => p.getY());
  return closestPair(Sx, Sy);
}

function closestPair(Sx: Point[], Sy: Point[]): PointPair {
  const size = Sx.length;

  if (size === 2) {
    return {
      pair: [Sx[0] as Point, Sx[1] as Point],
      d: getDistance(Sx[0] as Point, Sx[1] as Point),
    };
  }
  if (size <= 3) return closestPairOfPointsSimple(Sx);

  const midIndex = Math.ceil(size / 2);
  const mid = Sx[midIndex] as Point;

  const dl = closestPair(Sx.slice(0, midIndex), Sy);
  const dr = closestPair(Sx.slice(-midIndex), Sy);
  let minPair = minBy([dl, dr], getPointDistance) as PointPair;

  const stripPoints = getStrip(Sy, mid, minPair.d);
  const stripSize = stripPoints.length;

  for (let i = 0; i < stripSize; i++) {
    const maxNext = Math.min(6, stripSize - 1 - i);
    for (let j = i + 1; j <= maxNext; j++) {
      const pair = [stripPoints[i], stripPoints[j]] as [Point, Point];
      const distance = getDistance(pair[0], pair[1]);
      const pointPair: PointPair = {
        d: distance,
        pair,
      };
      minPair = minBy([minPair, pointPair], getPointDistance) as PointPair;
    }
  }

  return minPair;
}

function getStrip(points: Point[], mid: Point, distance: number): Point[] {
  return points.filter((point) => isInRange(point.getX(), mid.getX(), distance));
}

export function closestPairOfPointsSimple(points: Point[]): PointPair {
  if (points.length < 2) throw new Error(`Invalid number of points: ${points.length}`);
  let pair: [Point, Point] | undefined;
  let minDistance: number | undefined;

  for (let point of points) {
    for (let compare of points) {
      if (point === compare) continue;
      const distance = getDistance(point, compare);
      if (isNil(minDistance) || distance < minDistance) {
        pair = [point, compare];
        minDistance = distance;
      }
    }
  }

  return {
    pair: pair as [Point, Point],
    d: minDistance as number,
  };
}
