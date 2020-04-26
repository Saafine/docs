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
    },
    {
        args: [[4,5,6,7,0,1,2], 0],
        output: 4
    }

    // testing binarySearchOfStartIndexOfUnsortedArray
    // {
    //     args: [[0, 1, 2, -2, -1], -1],
    //     output: 3
    // },
    // {
    //     args: [[4, 5, 6, 7, 0, 1, 2], 0],
    //     output: 4
    // },
    // {
    //     args: [[4, 5, 6, 7, 0, 1, 2], 3],
    //     output: 4
    // },
    // {
    //     args: [[6, 7, 0, 1, 2, 4, 5], 7],
    //     output: 2
    // },
    // {
    //     args: [[6, 7, 2, 3, 4, 5], 2],
    //     output: 2
    // },
    // {
    //     args: [[8, 9, 2, 3, 4, 5, 6, 7], 2],
    //     output: 2
    // },
    // {
    //     args: [[1, 7], 0],
    //     output: 0
    // },
    // {
    //     args: [[7, 1], 0],
    //     output: 1
    // },
    // {
    //     args: [[0, 1, 2, 3, -1], 0],
    //     output: 4
    // },
];

function binarySearchOfStartIndexOfUnsortedArray(arr, left = 0, right = arr.length - 1, previous = arr[0]) {
    if (left > right) return -1;
    const midIndex = Math.floor((left + right) / 2);
    const mid = arr[midIndex];
    const previousValue = arr[midIndex - 1];
    if (previousValue > mid) {
        return midIndex;
    }

    if (previous <= mid) {
        return binarySearchOfStartIndexOfUnsortedArray(arr, midIndex + 1, right, mid);
    } else {
        return binarySearchOfStartIndexOfUnsortedArray(arr, left, midIndex - 1);
    }
}

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    // Depending if you use ceil/floor, you may get a different result if your array looks for instance like: 0 1 1 1 1 2 and looking for the index of a 1
    const midIndex = Math.floor((left + right) / 2);
    const mid = arr[midIndex];
    if (mid === target) return midIndex;

    if (mid <= target) {
        // go right
        return binarySearch(arr, target, midIndex + 1, right);
    } else {
        // go left
        return binarySearch(arr, target, left, midIndex - 1);
    }
}


function search(arr, target) {
    if (!arr.length) return -1;
    const isSorted = arr[0] < arr[arr.length - 1];
    const idx = isSorted ? 0 : binarySearchOfStartIndexOfUnsortedArray(arr);

    const leftSorted = arr.slice(0, idx);
    const searchLeftSorted = binarySearch(leftSorted, target);
    if (searchLeftSorted !== -1) return searchLeftSorted;

    const rightSorted = arr.slice(idx);
    const searchRightSorted = binarySearch(rightSorted, target);
    if (searchRightSorted !== -1) return leftSorted.length + searchRightSorted

    return -1;
}

trySolution(search, testData);

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
