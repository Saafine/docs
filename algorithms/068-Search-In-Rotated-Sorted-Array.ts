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
    {
        args: [[0, 1, 2, -2, -1], -1],
        output: 4
    },
    {
        args: [[4, 5, 6, 7, 0, 1, 2], 0],
        output: 4
    },
    {
        args: [[4, 5, 6, 7, 0, 1, 2], 3],
        output: -1
    },
    {
        args: [[6, 7, 0, 1, 2, 4, 5], 7],
        output: 1
    },
    {
        args: [[6, 7, 2, 3, 4, 5], 2],
        output: 2
    },
    {
        args: [[8, 9, 2, 3, 4, 5, 6, 7], 2],
        output: 2
    }
];


function findStartIndex(arr, target, index = 0, min = 0, max = arr.length - 1, previousValue = -Infinity) {
    const value = arr[index];
    if (min === max) return -1;
    if (value === target) return index;

    const isBiggerThanTarget = value > target;
    const isRising = value > previousValue;
    if (isBiggerThanTarget && isRising) {
        return findStartIndex(arr, target, Math.floor(index - ((index - min) / 2)), previousValue, value, -Infinity);
        // return findStartIndex(arr, target, Math.floor(max - ((max - index) / 2)), min + 1, max, value);
    } else if (!isBiggerThanTarget && isRising) {
        // return findStartIndex(arr, target, Math.floor(index - ((index - min) / 2)), previousValue, value, -Infinity);
        return findStartIndex(arr, target, Math.floor(max - ((max - index) / 2)), min + 1, max, value);
    } else if (isBiggerThanTarget && !isRising) {
        const next = Math.floor(max - ((max - index) / 2));
        return findStartIndex(arr, target, next === index ? next + 1 : index, min + 1, max, value);
        // return findStartIndex(arr, target, min, min, index, -Infinity);
    } else if (!isBiggerThanTarget && !isRising) {
        // const next = Math.floor(max - ((max - index) / 2));
        // return findStartIndex(arr, target, next === index ? next + 1 : index, min + 1, max, value);
        return findStartIndex(arr, target, min, min, index, -Infinity);
    } else {
        console.log('?');
    }
}

function solution(arr, target) {
    if (!arr.length) return -1;
    return findStartIndex(arr, target);
}

trySolution(solution, testData, 0);

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
