import { Point } from './point';

const height = 900;
const width = 1500;
const pointSize = 5;
const scale = 35;

export function render(
  _points: Array<number[]>,
  { from, to, result }: { from: Point; to: Point; result: Point[] }
): void {
  const points = _points.map(rescale);

  const ctx = buildCanvas();
  drawAxis(ctx);

  points.forEach(([x, y]) => {
    drawPoint(ctx, x, y);
  });

  result.forEach((point) => {
    drawPoint(ctx, point.getX() * scale, point.getY() * scale, 'blue');
  });

  drawRectangle(ctx, from, to, 'green');
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

function rescale(inputs: number[]): [number, number] {
  return [(inputs[0] as number) * scale, (inputs[1] as number) * scale];
}
