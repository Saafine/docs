const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3304/',
    name: 'Search in Rotated Sorted Array',
    description: `
        Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
        (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
        You are given a target value to search. If found in the array return its index, otherwise return -1.
        You may assume no duplicate exists in the array.
        Your algorithm's runtime complexity must be in the order of O(log n).
    `,
    tags: []
};

const testData = [
    // {
    //     args: [[0, 1, 2, -2, -1], -1],
    //     output: 4
    // },
    // {
    //     args: [[4, 5, 6, 7, 0, 1, 2], 0],
    //     output: 4
    // },
    // {
    //     args: [[4, 5, 6, 7, 0, 1, 2], 3],
    //     output: -1
    // },
    // {
    //     args: [[6, 7, 0, 1, 2, 4, 5], 7],
    //     output: 1
    // },
    // {
    //     args: [[6, 7, 2, 3, 4, 5], 2],
    //     output: 2
    // },
    // {
    //     args: [[8, 9, 2, 3, 4, 5, 6, 7], 2],
    //     output: 2
    // }

    {
        args: [[0, 1, 2, -2, -1], -1],
        output: 3
    },
    {
        args: [[4, 5, 6, 7, 0, 1, 2], 0],
        output: 4
    },
    {
        args: [[4, 5, 6, 7, 0, 1, 2], 3],
        output: 4
    },
    {
        args: [[6, 7, 0, 1, 2, 4, 5], 7],
        output: 2
    },
    {
        args: [[6, 7, 2, 3, 4, 5], 2],
        output: 2
    },
    {
        args: [[8, 9, 2, 3, 4, 5, 6, 7], 2],
        output: 2
    },
    {
        args: [[1, 7], 0],
        output: 0
    },
    {
        args: [[7, 1], 0],
        output: 1
    },
];


function findStartIndex(arr, index = 0, min = 0, max = arr.length - 1) {
    const value = arr[index];
    const next = arr[index + 1];
    if (value > next) return index;
    if (index === 0) return findStartIndex(arr, Math.floor(max - (max - index) / 2), min, max);

    const minValue = arr[min];
    // go right
    if (value > minValue) {
        min = index;
        const nextIndex = Math.floor(max - (max - index) / 2);
        return findStartIndex(arr, nextIndex, min, max);
    } else {
        // go left
        max = index;
        const nextIndex = Math.floor(index - (index - min) / 2);
        return findStartIndex(arr, nextIndex, min, max);
    }
}

function solution(arr, target) {
    if (!arr.length) return -1;
    const idx = findStartIndex(arr);
    return idx;
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
