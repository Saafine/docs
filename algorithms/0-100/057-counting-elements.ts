const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3289/',
    name: 'Counting Elements',
    description: `
    Given an integer array arr, count element x such that x + 1 is also in arr.
    If there're duplicates in arr, count them seperately.
    `,
    tags: []
};

const testData = [
    {
        args: [[1, 2, 3]],
        output: 2
    },
    {
        args: [[1, 1, 3, 3, 5, 5, 7, 7]],
        output: 0
    },
    {
        args: [[1, 3, 2, 3, 5, 0]],
        output: 3
    },
    {
        args: [[1, 1, 2, 2]],
        output: 2
    },
    {
        args: [[1, 1, 2]],
        output: 2
    }
];


function solution(arr) {


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
