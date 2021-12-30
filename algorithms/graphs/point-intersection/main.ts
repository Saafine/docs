import { render } from './render';
import { input } from './inputs/003';
import { intersections } from './tree';

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept(function () {
    location.reload();
  });
}

function run() {
  const points = intersections(input);
  render(input, {points});
  console.log({points});
}

run();
