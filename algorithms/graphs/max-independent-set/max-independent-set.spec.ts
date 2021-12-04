import { NodeV } from './max-independent-set';

interface TestTree {
  node: number;
  children?: TestTree[];
}

describe('max independent set', () => {
  it('should run', () => {
    const tree: TestTree = {
      node: 14,
      children: [
        {
          node: 5,
          children: [
            {
              node: 3,
              children: [
                {
                  node: 2,
                  children: [
                    {
                      node: 1,
                    },
                    {
                      node: 1,
                    },
                  ],
                },
                {
                  node: 1,
                },
              ],
            },
            {
              node: 1,
              children: [
                {
                  node: 1,
                },
              ],
            },
          ],
        },
        {
          node: 9,
          children: [
            {
              node: 2,
              children: [
                {
                  node: 1,
                  children: [
                    {
                      node: 1,
                    },
                  ],
                },
                {
                  node: 1,
                },
              ],
            },
            {
              node: 3,
              children: [
                {
                  node: 2,
                  children: [
                    {
                      node: 1,
                    },
                    {
                      node: 1,
                    },
                  ],
                },
              ],
            },
            {
              node: 4,
              children: [
                {
                  node: 1,
                  children: [
                    {
                      node: 1,
                    },
                  ],
                },
                {
                  node: 2,
                  children: [
                    {
                      node: 1,
                    },
                    {
                      node: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    function walk(testTree: TestTree, previous: NodeV) {
      const node = new NodeV(testTree.node);
      previous.addChild(node);
      testTree.children?.forEach((child) => {
        walk(child, node);
      });
    }

    const start = new NodeV(tree.node);
    walk(tree, start);

    const rootNode = start.getChildren()[0] as NodeV;

    expect(rootNode.getMaxIndependentSetSize()).toBe(14);
    // expect(rootNode.getTotalCalls()).toBe(13);
  });
});
