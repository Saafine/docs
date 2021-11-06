import { Point } from './point';
import { isNil, minBy, sortBy } from 'lodash';
import { getDistance } from './point.utils';
import { PointPair } from './closest-pair.model';
import { isInRange } from './closest-pair.utils';

// Assume all points have distinct coordinates (no ties)
// Assume at least 4 points in the input

export function closestPairOfPoints(input: Point[]): PointPair {
  const Sx = sortBy(input, (p: Point) => p.getX());
  const Sy = sortBy(input, (p: Point) => p.getY());
  return closestPair(Sx, Sy);
}

function closestPair(X: Point[], Y: Point[]): PointPair {
  const size = X.length;

  if (size === 2)
    return {
      pair: [X[0] as Point, X[1] as Point],
      d: getDistance(X[0] as Point, X[1] as Point),
    };
  if (size <= 3) return closestPairOfPointsSimple(X);

  const midIndex = Math.ceil(size / 2);
  const mid = X[midIndex] as Point;

  const dl = closestPair(X.slice(0, midIndex), Y);
  const dr = closestPair(X.slice(-midIndex), Y);
  let d = minBy([dl, dr], (pair) => pair.d) as PointPair; // TODO [P. Labus] toDistance fn

  const S = getStrip(Y, mid, d.d);
  const stripSize = S.length;

  for (let i = 0; i < stripSize; i++) {
    const maxNext = Math.min(6, stripSize - 1 - i);
    for (let j = i + 1; j <= maxNext; j++) {
      const pair = [S[i], S[j]] as [Point, Point];
      const distance = getDistance(pair[0], pair[1]);
      const pointPair: PointPair = {
        d: distance,
        pair,
      };
      d = minBy([d, pointPair], (pair) => pair.d) as PointPair; // TODO [P. Labus] toDistance fn
    }
  }

  return d;
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
