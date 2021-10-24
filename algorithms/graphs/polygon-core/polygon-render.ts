import { Point } from './point';

const height = 900;
const width = 900;
const pointSize = 5;
const scale = 4;

export function render(_points: Array<number[]>, { local_max, local_min }: { local_min: Point, local_max: Point }): void {
    const points = _points.map(rescale);

    const ctx = buildCanvas();
    drawAxis(ctx);

    const firstCoord = points[0];


    points.forEach(([x, y], index) => {
        drawPoint(ctx, x, y);
        const nextPoints = points[index + 1];

        if (nextPoints) connectPoints(ctx, [x, y], [nextPoints[0], nextPoints[1]]);
        if (index === points.length - 1) connectPoints(ctx, [x, y], [firstCoord[0], firstCoord[1]]);
    });

    const [[localMinX, localMinY]] = [[local_min.getX(), local_min.getY()]].map(rescale);
    const [[localMaxX, localMaxY]] = [[local_max.getX(), local_max.getY()]].map(rescale);
    drawPoint(ctx, localMinX, localMinY, 'green');
    drawPoint(ctx, localMaxX, localMaxY, 'black');

    const customPoint = new Point([35, 30]);
    const [[customX, customY]] = [[customPoint.getX(), customPoint.getY()]].map(rescale);
    drawPoint(ctx, customX, customY, 'aqua');
}

function buildCanvas(): CanvasRenderingContext2D {
    const canvas = document.querySelector('canvas');
    canvas.height = height;
    canvas.width = width;

    const ctx = canvas.getContext('2d');
    ctx.transform(1, 0, 0, -1, canvas.width / 2, canvas.height / 2);
    return ctx;
}

function drawPoint(ctx: CanvasRenderingContext2D, x: number, y: number, color = 'red'): void {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, pointSize, pointSize);
}

function drawAxis(ctx: CanvasRenderingContext2D): void {
    // horizontal
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, -height / 2);
    ctx.lineTo(0, height / 2);
    ctx.stroke();

    // vertical
    ctx.moveTo(-width / 2, 0);
    ctx.lineTo(width / 2, 0);
    ctx.stroke();
    ctx.closePath();
}

function connectPoints(ctx: CanvasRenderingContext2D, [fromX, fromY]: [number, number], [toX, toY]: [number, number]): void {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    ctx.closePath();
}

function rescale(inputs: number[]): [number, number] {
    return [inputs[0] * scale, inputs[1] * scale];
}

