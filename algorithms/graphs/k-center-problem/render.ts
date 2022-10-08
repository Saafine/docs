import { InputData } from './furthest-first.model';
import { Point } from './point';

const height = 900;
const width = 1500;
const pointSize = 5;
const scale = 35;

export function render(inputData: InputData, result: Point[]): void {
  const ctx = buildCanvas();
  const points = inputData.points.map(([x, y]) => new Point([x as number, y as number]));

  points.forEach((point) => {
    drawPoint(ctx, point.getX() * scale, point.getY() * scale, 'blue');
  });

  result.forEach((point) => {
    drawPoint(ctx, point.getX() * scale, point.getY() * scale, 'red');
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
