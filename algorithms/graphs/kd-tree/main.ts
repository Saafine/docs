import { render } from './render';
import { input } from './inputs/cw__001';
import { Point, PointRange } from './point';
import { kdTree } from './kd-tree';
import { kdTreeSearch } from './kd-tree-search';

function run() {
  const points = input.coords.map((coords) => new Point(coords));
  const from = new Point(input.area[0] as number[]);
  const to = new Point(input.area[1] as number[]);
  const range = new PointRange(from, to);
  const tree = kdTree(points);
  const result = kdTreeSearch(tree, range);

  render(input.coords, { from, to, result });

  console.log({
    input,
    result,
    tree
  });
}

run();
