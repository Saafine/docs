import { Point } from './point';

export class Node {
  left: Node | null = null;
  right: Node | null = null;

  constructor(public point: Point, private parent: Node | null) {}
}
