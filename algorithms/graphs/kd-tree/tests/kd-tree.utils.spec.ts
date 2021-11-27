import { Point } from '../point';
import { kdTree, kdTree2 } from '../kd-tree';
import { kdTreeToString } from '../kd-tree-to-string';

describe('kd-tree', () => {
  it('should build tree', () => {
    const points = [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
      { x: 5, y: 6 },
      { x: 7, y: 8 },
    ].map(({ x, y }) => new Point([x, y]));

    const tree = kdTree(points);

    expect(tree?.point.getX()).toEqual(5);
    expect(tree?.point.getY()).toEqual(6);
    expect(tree?.left?.point.getX()).toEqual(3);
    expect(tree?.left?.point.getY()).toEqual(4);
    expect(tree?.left?.left?.point.getX()).toEqual(1);
    expect(tree?.left?.left?.point.getY()).toEqual(2);
    expect(tree?.left?.left?.left).toBeNull();
    expect(tree?.left?.left?.left).toBeNull();
  });

  it('should return tree as string', () => {
    const points = [
      { x: 7, y: 8 },
      { x: 1, y: 2 },
      { x: 15, y: 2 },
      { x: 3, y: 4 },
      { x: 5, y: 6 },
    ].map(({ x, y }) => new Point([x, y]));

    const tree = kdTree(points);
    const tree2 = kdTree2(points);

    const treeString = kdTreeToString(tree);
    const treeString2 = kdTreeToString(tree2);

    expect(treeString).toEqual(treeString2)
  })
});
