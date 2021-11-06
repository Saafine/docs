import { Point } from './point';
import { isNil } from 'lodash';
import { getDistance } from './point.utils';

// Assume all points have distinct coordinates (no ties)
// Assume at least 4 points in the input

export function closestPairOfPoints(input: Point[]): [Point, Point] {
  const size = input.length;
  if (size <= 3) return closestPairOfPointsSimple(input);

  // rename to Sx, Sy
  // const Px = sortBy(input, (p: Point) => p.getX());
  // const Py = sortBy(input, (p: Point) => p.getY());
  return input as [Point, Point];
}

export function closestPairOfPointsSimple(points: Point[]): [Point, Point] {
  if (points.length < 2) throw new Error('Invalid number of points');
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

  return pair as [Point, Point];
}
