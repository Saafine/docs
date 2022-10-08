import { render } from './render';
import { input } from './inputs/003';
import { furthestFirst } from './furthest-first';
import { Point } from './point';

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(function () {
    location.reload();
  });
}

function run() {
  const points = input.points.map(([x, y]) => new Point([x as number, y as number]));
  const result = furthestFirst(points, input.k);
  render(input, result);
  console.log(result);
}

run();
