import { Point } from './point';
import { ascend, prop, sortWith } from 'ramda';
import { NodeJs, NodeManagerJsNumber, Tree } from './tree/src';
import { flatten } from 'lodash';

type Range = [number, number];
type NodeP = NodeJs<number, unknown>;

export interface InputData {
  verticals: Segment[];
  horizontals: Segment[];
}

export type Segment = {
  from: Point;
  to: Point;
};

export enum PointType {
  HORIZONTAL_LEFT = 1,
  VERTICAL = 2,
  HORIZONTAL_RIGHT = 3,
}

export interface SegmentPoint {
  x: number;
  source: Segment;
  type: PointType;
}

export function intersections({ verticals, horizontals }: InputData): SegmentPoint[] {
  const N: SegmentPoint[] = getSegmentPoints({ verticals, horizontals });
  const nodeManager = new NodeManagerJsNumber<SegmentPoint>();
  const tree = new Tree(nodeManager);

  let result: SegmentPoint[] = [];

  for (let x = 0; x < N.length; x++) {
    const L = N[x] as SegmentPoint;
    if (L.type === PointType.HORIZONTAL_LEFT) {
      tree.addNode(L.source.from.getY(), L);
    } else if (L.type === PointType.HORIZONTAL_RIGHT) {
      tree.removeNode(L.source.from.getY());
    } else {
      const query = rangeQuery1d(nodeManager.getRoot(), [L.source.from.getY(), L.source.to.getY()]);
      const found = query.map((node) => node.getValue() as SegmentPoint);
      result = result.concat(found);
    }
  }

  return result;
}

export function rangeQuery1d(root: NodeJs<number, unknown> | null, range: Range): NodeP[] {
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
  const [min, max] = range; // Expect range to be sorted
  return min <= value && value <= max;
}

function findSplitNode(root: NodeJs<number, unknown> | null, range: Range): NodeP | null {
  if (!root) return null;
  let splitNode: NodeJs<number, unknown> = root;
  const [min, max] = range; // Expect range to be sorted

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

export function getSegmentPoints({ horizontals, verticals }: InputData): SegmentPoint[] {
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
