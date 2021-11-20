import { Point } from './point';

export class Node {
  left: Node | null = null;
  right: Node | null = null;

  constructor(private point: Point, private parent: Node | null) {}
}
