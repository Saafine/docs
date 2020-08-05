const meta = {
    link: 'https://www.hackerrank.com/challenges/minimum-distances/problem',
    name: 'Minimum Distances',
    description: `We define the distance between two array values as the number of indices between the two values. 
    Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.`,
    tags: []
};

const testData = [
    {
        args: [[3, 2, 1, 2, 3]],
        output: 2
    },
    {
        args: [[3, 2, 1, 2, 3]],
        output: 2
    },
    {
        args: [[]],
        output: -1
    },
    {
        args: [[7, 1, 3, 4, 1, 7]],
        output: 3 // |1 - 4|
    }
];


function solution(arr) {
    const distances = {};
    debugger;
    let minDistance = null;
    for (let x = 0; x < arr.length; x++) {
        const value = arr[x];
        if (typeof distances[value] === 'undefined') {
            distances[value] = x;
        } else {
            const distance = x - distances[value];
            minDistance = minDistance === null || distance < minDistance ? distance : minDistance;
        }
    }

    return minDistance === null ? -1 : minDistance;
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
