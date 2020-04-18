const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3293/',
    name: 'Diameter of Binary Tree',
    description: `Given a binary tree, you need to compute the length of the diameter of the tree. 
    The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.`,
    tags: []
};

const testData = [
    {
        args: [{
            value: 1,
            left: {
                value: 2,
            },
            right: {
                value: 3,
            }
        }],
        output: 2
    },
    {
        args: [{
            value: 1,
            left: {
                value: 2,
            },
            right: {
                value: 3,
                left: {
                    value: 4,
                }
            }
        }],
        output: 3
    }
];

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//            1
//           / \
//          2   3
//         / \
//        4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3]
function diameterOfBinaryTree(root) {
    let treeMax = 0;
    const getMaxLeftRight = (root) => {
        const { left, right} = root || {};
        const depthLeft = left ? 1 + getMaxLeftRight(left) : 0;
        const depthRight = right ? 1 + getMaxLeftRight(right) : 0;
        const nodeMax = depthRight + depthLeft;
        treeMax = nodeMax > treeMax ? nodeMax : treeMax;
        return Math.max(depthLeft, depthRight);
    };
    getMaxLeftRight(root);
    return treeMax;
}

trySolution(diameterOfBinaryTree, testData);

function trySolution(solutionFn, cases, specifyIdx = undefined) {
    let casesLen = cases.length;
    let startIdx = specifyIdx || 0;
    if (typeof specifyIdx !== 'undefined') {
        casesLen = startIdx + 1;
    }

    for (let x = startIdx; x < casesLen; x++) {
        const args = cases[x].args;
        const expectedOutput = cases[x].output;
        const testOutput = solutionFn(...args);
        const result = testOutput === expectedOutput;
        if (!result) {
            console.error(`[${ x }] FAIL | Expected: ${ expectedOutput } | Got: ${ testOutput }`);
        } else {
            console.log(`[${ x }] Success`);
        }
    }
}
