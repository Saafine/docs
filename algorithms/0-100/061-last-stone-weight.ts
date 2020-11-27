const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3297/',
    name: 'Last Stone Weight',
    description: `
    We have a collection of stones, each stone has a positive integer weight.
    Each turn, we choose the two heaviest stones and smash them together. 
    Suppose the stones have weights x and y with x <= y.  The result of this smash is:
    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
    `,
    tags: []
};

const testData = [
    {
        args: [[2, 7, 4, 1, 8, 1]],
        output: 1
    }
];

const descending = (a, b) => b - a;

function smash(arr) {
    if (arr.length === 1) return arr[0];
    if (arr.length === 0) return 0;
    const [first, second] = arr;
    const result = first - second;
    const rest = arr.slice(2);
    if (result === 0) return smash(rest);
    return smash([result, ...rest].sort(descending));
}

function lastStoneWeight(arr) {
    arr.sort(descending);
    return smash(arr);
}

trySolution(lastStoneWeight, testData);

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
