const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3298/',
    name: 'Contiguous Array',
    description: `Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.`,
    tags: []
};

const testData = [
    {
        args: [[0, 1]],
        output: 2
    },
    {
        args: [[0, 1, 0]],
        output: 2
    },
    {
        args: [[0, 0, 0, 1, 1, 1, 0]],
        output: 6
    },
    {
        args: [[0, 1, 1, 0, 1, 1, 1, 0]],
        output: 4
    },
    {
        args: [[0, 1, 0, 1]],
        output: 4
    },
    {
        args: [[1, 1, 1, 1, 1, 1, 1, 1]],
        output: 0
    },
    {
        args: [[]],
        output: 0
    },
    {
        args: [[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1]],
        output: 94
    },
    {
        args: [[0,0,1,0,0,0,1,1]],
        output: 6
    }
];

function findMaxLength(arr) {
    let max = 0;
    for (let x = 0; x < arr.length; x++) {
        let zeros = 0;
        let ones = 0;
        for (let y = x; y < arr.length; y++) {
            zeros = arr[y] === 0 ? zeros + 1 : zeros;
            ones = arr[y] === 1 ? ones + 1 : ones;

            if (zeros === ones) {
                max = zeros + ones > max ? zeros + ones : max;
            }
        }
    }
    return max;
}

trySolution(findMaxLength, testData);

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
