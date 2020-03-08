const meta = {
    link: '',
    name: 'longest increasing sub sequence',
    tags: []
};

const testData = [
    {
        args: [[1, 4, 3]],
        output: 2
    },
    {
        args: [[]],
        output: 0
    },
    {
        args: [[1]],
        output: 1
    },
    {
        args: [[5,
            1,
            4,
            5,
            2, 6]],
        output: 4
    }
];

function findLIS(arr) {
    let max = arr[0];
    let size = arr.length > 0 ? 1 : 0;

    for (let x = 1; x < arr.length; x++) {
        const current = arr[x];
        console.log({current, max});
        if (current > max) {
            size++;
            max = current;
        }
    }

    return size;
}

function solution(arr) {
    return findLIS(arr);
}

trySolution(solution, testData, 3);

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
