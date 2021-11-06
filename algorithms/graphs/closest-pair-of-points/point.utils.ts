import { Point } from './point';

export function getDistance(a: Point, b: Point): number {
    const x = a.getX() - b.getX();
    const y = a.getY() - b.getY();
    return Math.sqrt(x * x + y * y);
}
