import { Point } from './point';
import { ascend, prop, sortWith } from 'ramda';
import { flatten } from 'lodash';
import { InputData, NodeP, PointType, Range, SegmentPoint } from './model';
import { NodeJs, NodeManagerJsNumber, Tree } from './tree/src';

export function intersections({ verticals, horizontals }: InputData): Point[] {
  const N: SegmentPoint[] = getSegmentPoints({ verticals, horizontals });
  const nodeManager = new NodeManagerJsNumber<SegmentPoint>();
  const tree = new Tree(nodeManager);

  let result: Point[] = [];

  for (let x = 0; x < N.length; x++) {
    const L = N[x] as SegmentPoint;
    if (L.type === PointType.HORIZONTAL_LEFT) {
      tree.addNode(L.source.from.getY(), L);
    } else if (L.type === PointType.HORIZONTAL_RIGHT) {
      tree.removeNode(L.source.from.getY());
    } else {
      const b = L.source.from.getY();
      const c = L.source.to.getY();
      const query = rangeQuery1d<SegmentPoint>(nodeManager.getRoot(), [b, c]);
      const found = query.map((node) => new Point([L.source.from.getX(), node.getValue().source.from.getY()]));
      result = result.concat(found);
    }
  }

  return result;
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

export function rangeQuery1d<T = unknown>(root: NodeJs<number, T> | null, range: Range): NodeP<T>[] {
  let nodes: NodeP<T>[] = [];
  const splitNode = findSplitNode<T>(root, range);
  if (!splitNode) return nodes;
  if (isWithinRange(splitNode, range)) nodes.push(splitNode);
  nodes = nodes.concat(rangeQuery1d(splitNode.getLeft(), range));
  nodes = nodes.concat(rangeQuery1d(splitNode.getRight(), range));
  return nodes;
}

function isWithinRange<T>(node: NodeP<T>, range: Range): boolean {
  const value = node.getKey();
  const [min, max] = range; // Expect range to be sorted
  return min <= value && value <= max;
}

function findSplitNode<T = unknown>(root: NodeJs<number, T> | null, range: Range): NodeP<T> | null {
  if (!root) return null;
  let splitNode: NodeJs<number, T> = root;
  const [min, max] = range; // Expect range to be sorted

  const isLeaf = (node: NodeJs<any, any>) => !node.getLeft() && !node.getRight();

  while (!isLeaf(splitNode) && (max <= splitNode.getKey() || splitNode.getKey() < min)) {
    if (max <= splitNode.getKey()) {
      splitNode = splitNode.getLeft() as NodeJs<number, T>;
    } else {
      splitNode = splitNode.getRight() as NodeJs<number, T>;
    }
  }

  return splitNode;
}
