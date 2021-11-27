import { KdTree } from './kd-tree';
import { Node } from './node';

export function kdTreeToString(kdTree: KdTree): string {
  let result = ``;

  const visitTree = (node: Node) => {
    result = `${result}X${node.point.getX()}Y${node.point.getY()}`;
    if (node.left) visitTree(node.left);
    if (node.right) visitTree(node.right);
  }

  visitTree(kdTree);

  return result;
}
