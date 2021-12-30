import { Point } from './point';
import { ascend, prop, sortWith } from 'ramda';
import { NodeJs, NodeManagerJsNumber, Tree } from './tree/src';
import { flatten } from 'lodash';
// https://cw.fel.cvut.cz/b181/_media/courses/cg/lectures/03-rangesearch.pdf
// http://www.facweb.iitkgp.ac.in/~sourav/Lecture-17.pdf
// https://github.com/Shalin23/Range-Tree/blob/main/RangeTree.py
// http://people.scs.carleton.ca/~michiel/lecturenotes/ALGGEOM/horverintersect.pdf
// http://www-di.inf.puc-rio.br/~laber/range_kd_trees.pdf
// https://github.com/pavle10/faculty_projects/blob/e6d9063538608bfd824013b3085ef85fb767b799/les/src/les/RangeTree.java
type Range = [number, number];
type NodeValue = string;
type NodeP = NodeJs<number, NodeValue>;

export type Segment = {
  from: Point;
  to: Point;
};

export enum PointType {
  HORIZONTAL_LEFT = 1,
  VERTICAL = 2,
  HORIZONTAL_RIGHT = 3,
}

export function getSegmentPoints({ horizontals, verticals }: { horizontals: Segment[]; verticals: Segment[] }): SegmentPoint[] {
  const sort = sortWith<SegmentPoint>([ascend(prop('x')), ascend(prop('type'))]);

  const horizontalSegmentPoints: SegmentPoint[] = flatten(
    horizontals.map((segment) => [
      {
        x: segment.from.getX(),
        type: PointType.HORIZONTAL_LEFT,
        source: segment,
      },
      {
        x: segment.to.getX(),
        type: PointType.HORIZONTAL_RIGHT,
        source: segment,
      },
    ])
  );

  const verticalSegmentPoints: SegmentPoint[] = verticals.map((segment) => ({
    x: segment.from.getX(),
    source: segment,
    type: PointType.VERTICAL,
  }));

  return sort(horizontalSegmentPoints.concat(verticalSegmentPoints));
}

export interface SegmentPoint {
  x: number;
  source: Segment;
  type: PointType;
}

export function intersections(H: Segment[], V: Segment[]): Point[] {
  const N: SegmentPoint[] = [];
  return [];
}

export function runTreeTest() {
  const nodeManager = new NodeManagerJsNumber<string>();
  // https://github.com/subspace/red-black-tree
  const tree = new Tree(nodeManager);
  tree.addNode(5, 'root');
  tree.addNode(10, 'y');
  findSplitNode(nodeManager.getRoot(), [3, 4]);
  // tree.addNode(15, 'y');
  // tree.addNode(20, 'y');
  // tree.addNode(-10, 'y');
  // tree.addNode(-155, 'y');
  // tree.addNode(200, 'y');
}

export function rangeQuery1d(root: NodeJs<number, string> | null, range: Range): NodeP[] {
  let nodes: NodeP[] = [];
  const splitNode = findSplitNode(root, range);
  if (!splitNode) return nodes;
  if (isWithinRange(splitNode, range)) nodes.push(splitNode);
  nodes = nodes.concat(rangeQuery1d(splitNode.getLeft(), range));
  nodes = nodes.concat(rangeQuery1d(splitNode.getRight(), range));
  return nodes;
}

function isWithinRange(node: NodeP, range: Range): boolean {
  const value = node.getKey();
  const [min, max] = range; // TODO [P. Labus] what if not sorted
  return min <= value && value <= max;
}

function findSplitNode(root: NodeJs<number, string> | null, range: Range): NodeP | null {
  if (!root) return null;
  let splitNode: NodeJs<number, string> = root;
  const [min, max] = range; // TODO [P. Labus] what if not sorted

  const isLeaf = (node: NodeJs<any, any>) => !node.getLeft() && !node.getRight();

  while (!isLeaf(splitNode) && (max <= splitNode.getKey() || splitNode.getKey() < min)) {
    if (max <= splitNode.getKey()) {
      splitNode = splitNode.getLeft() as NodeJs<number, string>;
    } else {
      splitNode = splitNode.getRight() as NodeJs<number, string>;
    }
  }

  return splitNode;
}
