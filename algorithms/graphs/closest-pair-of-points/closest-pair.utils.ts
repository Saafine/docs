import { PointPair } from './closest-pair.model';

export function isInRange(a: number, b: number, distance: number): boolean {
  return Math.abs(a - b) <= distance;
}

export function getPointDistance(point: PointPair): number {
  return point.d;
}
