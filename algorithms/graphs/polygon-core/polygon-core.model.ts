import { Point } from './point';

export interface PolygonResult {
    y_min: Point;
    y_max: Point;
    hasCore: boolean;
    orientations: Orientation[]
    local_max: Point,
    local_min: Point,
    min_combined: Point;
    max_combined: Point;
}

export enum PointOrientation {

    Left = 'LEFT',
    Zero = 'Zero', // 0 - współliniowe
    Right = 'RIGHT'
}

export interface Orientation {
    p: Point;
    q: Point;
    r: Point;
    orientation: PointOrientation;
}
