import { render } from './render';
import { input } from './inputs/009';
import { Point, PointRange } from './point';
import { kdTree, kdTree2 } from './kd-tree';
import { kdTreeSearch } from './kd-tree-search';

// @ts-ignore
if (module.hot) { module.hot.accept(function () { location.reload(); }); }

function run() {
  const points = input.coords.map((coords) => new Point(coords));
  const from = new Point(input.area[0] as number[]);
  const to = new Point(input.area[1] as number[]);
  const range = new PointRange(from, to);
  const tree = kdTree2(points);

  const result = kdTreeSearch(tree, range);
  render(input.coords, { from, to, result });

  console.log({
    input,
    result,
    tree
  });
}

run();
