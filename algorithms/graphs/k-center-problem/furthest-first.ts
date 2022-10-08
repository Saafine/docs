import { getDistance, Point } from './point';
import { sumBy } from 'lodash';

export function furthestFirst(points: Point[], k: number): Point[] {
  if (points.length === 0) return [];
  const S: Point[] = [points[0] as Point];

  for (let j = 1; j < k; j++) {
    const pointsWithFurthestFirst = getFurthestFirst(S, points);
    S.push(pointsWithFurthestFirst[0] as Point);
    points = pointsWithFurthestFirst.slice(1);
  }

  return S;
}

function getFurthestFirst(selected: Point[], available: Point[]): Point[] {
  let furthest:
    | {
        point: Point;
        distance: number;
        index: number;
      }
    | undefined = undefined;

  for (let x = 0; x < available.length; x++) {
    const point = available[x] as Point;
    const distance = sumBy(selected, (pointB) => getDistance(pointB, point));
    if (!furthest || furthest.distance < distance) {
      furthest = {
        point,
        distance,
        index: x,
      };
    }
  }

  const furthestPointIndex = furthest?.index as number;
  const furthestPoint: Point = available[furthestPointIndex] as Point;
  const pointsWithoutFurthest = available.slice(0, furthestPointIndex + 1).concat(available.slice(furthestPointIndex + 1));

  return [furthestPoint].concat(pointsWithoutFurthest);
}
