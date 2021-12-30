import { Point } from './point';
import { InputData } from './tree';

const height = 900;
const width = 1500;
const pointSize = 5;
const scale = 35;

export function render(inputData: InputData, { points }: { points: Point[] }): void {
  const ctx = buildCanvas();

  points.forEach((point) => {
    drawPoint(ctx, point.getX() * scale, point.getY() * scale, 'blue');
  });

  inputData.verticals.forEach((segment) => {
    drawRectangle(ctx, segment.from, segment.to, 'green');
  });

  inputData.horizontals.forEach((segment) => {
    drawRectangle(ctx, segment.from, segment.to, 'green');
  });
}

function buildCanvas(): CanvasRenderingContext2D {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  canvas.height = height;
  canvas.width = width;

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.transform(1, 0, 0, -1, canvas.width / 2, canvas.height / 2);
  return ctx;
}

function drawPoint(ctx: CanvasRenderingContext2D, x: number, y: number, color = 'red'): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, pointSize, pointSize);
}

function drawRectangle(ctx: CanvasRenderingContext2D, from: Point, to: Point, color = 'red'): void {
  ctx.fillStyle = color;
  const height = Math.abs(from.getY() - to.getY()) * scale;
  const width = Math.abs(from.getX() - to.getX()) * scale;

  const x = Math.min(from.getX(), to.getX());
  const y = Math.min(from.getY(), to.getY());
  ctx.rect(x * scale, y * scale, width, height);
  ctx.stroke();
}
