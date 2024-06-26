import { render } from './render';
import { input } from './inputs/cw_002';
import { Point } from './point';
import { closestPairOfPoints } from './closest-pair-of-points';

function run() {
  const points = input.map((coords) => new Point(coords));
  const result = closestPairOfPoints(points);
  render(input, result);
  console.log(result);
}

run();
