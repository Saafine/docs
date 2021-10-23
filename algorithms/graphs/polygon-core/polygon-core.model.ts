import { Point } from './point';

export interface PolygonResult {
    y_min: Point;
    y_max: Point;
    hasCore: boolean;
}

export enum PointOrientation {
    Positive = 'Positive', // 1 - przeciwna do wskazowek zegara
    Zero = 'Zero', // 0 - liniowa
    Negative = 'Negative' // -1 zgodna ze wskazowkami zegara
}
