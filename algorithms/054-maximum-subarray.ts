const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3285/',
    name: 'Maximum Subarray',
    tags: []
};

const testData = [
    {
        args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        output: 6
    },
    {
        args: [[-1]],
        output: -1
    }
];


function solution(nums) {
    let max = null;
    let tempSum = 0;
    nums.forEach((element) => {
        const sumWithElement = tempSum < 0 ? element : tempSum + element;
        tempSum =  sumWithElement > 0 ? sumWithElement : element;
        if (tempSum > max || max === null) max = tempSum;
    });
    return max;
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
