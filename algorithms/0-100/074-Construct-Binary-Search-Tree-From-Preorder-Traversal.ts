const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3305/',
    name: 'Construct Binary Search Tree from Preorder Traversal',
    description: `
    Return the root node of a binary search tree that matches the given preorder traversal.
    (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and
    any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first,
    then traverses node.left, then traverses node.right.)
    It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.`,
    tags: []
};

const testData = [
    {
        args: [[8, 5, 1, 7, 10, 12]],
        output: [8, 5, 10, 1, 7, null, 12]
    }
];


function TreeNode(val, left, right) {
    // this.val = (val === undefined ? 0 : val);
    // this.left = (left === undefined ? null : left);
    // this.right = (right === undefined ? null : right);
}

function solution(arr) {
    let index = 0;
    let leftMax = arr[0];

    function left() {

    }

    function right() {

    }

    left();
    right();

}

trySolution(solution, testData);

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
