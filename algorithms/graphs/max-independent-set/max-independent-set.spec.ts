import { NodeV } from './get-max-independent-set-size';

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

    expect(test(tree)).toBe(14);
  });

  it('should work 2', () => {
    const tree: TestTree = {
      node: 1,
      children: [
        {
          node: 11,
          children: [
            {
              node: 111,
            },
            {
              node: 112,
            },
          ],
        },
        {
          node: 12,
          children: [
            {
              node: 121,
            },
            {
              node: 122,
            },
          ],
        },
      ],
    };

    expect(test(tree)).toBe(5);
  });

  it('should work 3', () => {
    const tree: TestTree = {
      node: 1,
      children: [
        {
          node: 2,
          children: [
            {
              node: 4,
              children: [
                {
                  node: 8,
                  children: [
                    {
                      node: 13,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          node: 3,
          children: [
            {
              node: 5,
            },
            {
              node: 6,
            },
            {
              node: 7,
              children: [
                {
                  node: 9
                },
                {
                  node: 10
                },
                {
                  node: 11
                },
                {
                  node: 12
                },
              ]
            }
          ]
        },
      ],
    };

    expect(test(tree)).toBe(9);
  });
});

function test(tree: TestTree): number {
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
  return rootNode.getMaxIndependentSetSize();
}
