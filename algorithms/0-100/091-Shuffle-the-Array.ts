const meta = {
    link: 'https://leetcode.com/problems/shuffle-the-array/',
    name: 'Shuffle the array',
    description: `Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
                  Return the array in the form [x1,y1,x2,y2,...,xn,yn].`,
    tags: []
};

const testData = [
    {
        args: [[2, 5, 1, 3, 4, 7], 3],
        output: [2, 3, 5, 4, 1, 7]
    }
];

function shuffle(nums: number[], n: number): number[] {
    const arr = [];
    for (let x = 0; x < nums.length; x++) {
        arr.push(nums[x]);
        arr.push(nums[x + n]);
        if (x + n >= nums.length - 1) break;
    }
    return arr;
}


trySolution(shuffle, testData);

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
