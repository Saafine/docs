import { Point } from './point';
import { PointOrientation } from './polygon-core.model';

export function textToCoords(text: string): Array<number[]> {
    return text.split('\n').filter((x) => x !== '').map((each) => each.split(',').map(Number));
}

export function getPointOrientation({ p, q, r }: { p: Point, q: Point, r: Point }): PointOrientation {
    const result = (q.getY() - p.getY()) * (r.getX() - q.getX()) -
        (q.getX() - p.getX()) * (r.getY() - q.getY());

    if (result === 0) return PointOrientation.Zero;

    return result > 0 ? PointOrientation.Negative : PointOrientation.Positive;
}
