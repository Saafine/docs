const meta = {
    link: '',
    name: 'Bi-section search',
    description: ``,
    tags: ['bisection search', 'binary search', 'logarithmic search'
    ]
};

const testData = [
    {
        args: [[1, 2, 3, 4, 5], 4],
        output: 3
    },
    {
        args: [[1, 2, 3, 4, 5], 2],
        output: 1
    },
    {
        args: [[0, 2], 1],
        output: -1
    },
    {
        args: [[1, 3, 4, 5], 2],
        output: -1
    },
    {
        args: [[0, 1], 1],
        output: 1
    },
    {
        args: [[0, 1], 0],
        output: 0
    },
    {
        args: [[-1, 0, 3, 5, 9, 12], 0],
        output: 1
    }
];

function search(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    // Depending if you use ceil/floor, you may get a different result if your array looks for instance like: 0 1 1 1 1 2 and looking for the index of a 1
    const midIndex = Math.floor((left + right) / 2);
    const mid = arr[midIndex];
    if (mid === target) return midIndex;

    if (mid <= target) {
        // go right
        return search(arr, target, midIndex + 1, right);
    } else {
        // go left
        return search(arr, target, left, midIndex - 1);
    }
}


// function search(arr, target, index = 0, min = 0, max = arr.length - 1) {
//     const value = arr[index];
//     if (value === target) return index;
//     if (min === max) return -1;
//
//     // right
//     if (target > value) {
//         const next = Math.ceil(max - (max - index) / 2);
//         min = index + 1;
//         if (min > next) return -1;
//         return search(arr, target, next, min, max);
//     } else {
//         // left
//         max = index - 1;
//         const next = Math.floor(index - (index - min) / 2);
//         if (max < next) return -1;
//         return search(arr, target, next, min, max);
//     }
// }

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
