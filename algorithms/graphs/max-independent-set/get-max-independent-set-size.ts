import { sum } from 'lodash';

export class NodeV {
  private children: NodeV[] = [];
  private maxIndependentSetSize: number | null = null;

  constructor(private testId: string | number) {}

  getMaxIndependentSetSize(): number {
    if (this.maxIndependentSetSize !== null) return this.maxIndependentSetSize;
    if (this.children.length === 0) return 1;

    // not picking that node, take children
    const a = sum(this.children.map((child) => child.getMaxIndependentSetSize()));

    // picking that node, take grandchildren
    const b =
      1 +
      sum(
        this.children.map((child) =>
          sum(child.getChildren().map((grandChild) => grandChild.getMaxIndependentSetSize()))
        )
      );

    const max = Math.max(a, b);
    this.maxIndependentSetSize = max;

    return max;
  }

  addChild(child: NodeV): void {
    this.children.push(child);
  }

  getChildren(): NodeV[] {
    return this.children;
  }
}
