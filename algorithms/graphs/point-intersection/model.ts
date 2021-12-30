import { NodeJs } from './tree/src';
import { Point } from './point';

export type Range = [number, number];
export type NodeP<T> = NodeJs<number, T>;

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
