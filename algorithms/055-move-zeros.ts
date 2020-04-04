const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3286/',
    name: 'Move Zeroes',
    description: `
    Given an array nums, write a function to move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
    `,
    tags: []
};

const testData = [
    {
        args: [[0,1,0,3,12]],
        output: [1,3,12,0,0]
    }
];


function solution(arr, index = 0, len = arr.length) {
    if (index === len - 1) return arr;
    const element = arr[index];
    if (element === 0)
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
