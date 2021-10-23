import { maxBy, minBy } from 'lodash';
import { Point } from './point';
import { PolygonResult } from './polygon-core.model';

export function checkPolygon(inputs: Array<number[]>): PolygonResult {
    let y_max: Point = new Point(inputs[0]);
    let y_min: Point = new Point(inputs[0]);

    for (let input of inputs) {
        const point = new Point(input);
        y_max = maxBy([point, y_max], (point) => point.getY());
        y_min = minBy([point, y_min], (point) => point.getY());
    }

    return {
        hasCore: false,
        y_max,
        y_min
    };
}

