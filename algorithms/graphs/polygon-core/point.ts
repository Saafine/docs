export class Point {
    constructor(private coord: number[]) {
    }

    getX(): number {
        return this.coord[0];
    }

    getY(): number {
        return this.coord[1];
    }
}
