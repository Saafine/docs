export const getX = (p: Point) => p.getX();
export const getY = (p: Point) => p.getY();

export class Point {
    constructor(private coord: number[]) {
    }

    getX(): number {
        return this.coord[0] as number;
    }

    getY(): number {
        return this.coord[1] as number;
    }
}

