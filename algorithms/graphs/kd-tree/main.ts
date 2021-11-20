import { render } from './render';
import { input } from './inputs/001';
import { Point } from './point';

console.log(`Input: ${input}`);

function run() {
  const points = input.coords.map((coords) => new Point(coords));
  // const result = closestPairOfPoints(points);
  render(input.coords);
  console.log(result);
}

run();
