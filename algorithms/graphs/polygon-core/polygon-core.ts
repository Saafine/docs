import { maxBy, minBy } from 'lodash';
import { Point } from './point';
import { Orientation, PointOrientation, PolygonResult } from './polygon-core.model';
import { getNextOrientationPoints, getPointOrientation } from './polygon-utils';

const getY = (point: Point) => point.getY();

export function checkPolygon(inputs: Array<number[]>): PolygonResult {
    const points = inputs.map((input) => new Point(input));

    let y_max: Point | undefined;
    let y_min: Point | undefined;
    let local_min: Point | undefined;
    let local_max: Point | undefined;

    const orientations: Orientation[] = [];

    for (let x = 0; x < points.length; x++) {
        const [p, q, r] = getNextOrientationPoints({ index: x, points });
        const orientation = getPointOrientation({ p, q, r });

        orientations.push({ p, q, r, orientation });

        if (orientation === PointOrientation.Right && q.getY() <= p.getY() && q.getY() <= r.getY()) local_min = minBy([q, local_min].filter(Boolean), getY);
        if (orientation === PointOrientation.Right && q.getY() >= p.getY() && q.getY() >= r.getY()) local_max = maxBy([q, local_max].filter(Boolean), getY);

        y_max = maxBy([p, y_max].filter(Boolean), getY);
        y_min = minBy([p, y_min].filter(Boolean), getY);
    }

    const min_combined = minBy([y_max, local_min].filter(Boolean), getY);
    const max_combined = maxBy([y_min, local_max].filter(Boolean), getY);
    const hasCore = min_combined.getY() > max_combined.getY();

    return {
        hasCore,
        min_combined,
        max_combined,
        y_max,
        y_min,
        local_min,
        local_max,
        orientations
    };
}

