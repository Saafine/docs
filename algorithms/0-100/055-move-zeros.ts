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
        args: [[0, 1, 0, 3, 12]],
        output: [1, 3, 12, 0, 0]
    }
];

function swap(arr, indexA, indexB) {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

function moveZeroes(arr, index = 0, lastIndex = arr.length - 1, zerosCount = 0) {
    if (index === lastIndex) return arr;
    const element = arr[index];
    const next = arr[index + 1];

    if (element === 0) {
        if (next === 0) {
            return moveZeroes(arr, index + 1, lastIndex, zerosCount + 1);
        } else {
            const swapCurrentWithNext = zerosCount === 0;
            const swapIndex = swapCurrentWithNext ? index + 1 : index - zerosCount;
            const swapIndex2 = swapCurrentWithNext ? index : index + 1;
            const seeIndex = swapCurrentWithNext ? index + 1 : index;
            swap(arr, swapIndex, swapIndex2);
            const zeros = swapCurrentWithNext ? 0 : zerosCount - 1;
            return moveZeroes(arr, seeIndex, lastIndex, zeros);
        }
    } else {
        return moveZeroes(arr, index + 1, lastIndex, zerosCount);
    }
}

trymoveZeroes(moveZeroes, testData);

function trymoveZeroes(moveZeroesFn, cases, specifyIdx = undefined) {
    let casesLen = cases.length;
    let startIdx = specifyIdx || 0;
    if (typeof specifyIdx !== 'undefined') {
        casesLen = startIdx + 1;
    }

    for (let x = startIdx; x < casesLen; x++) {
        const args = cases[x].args;
        const expectedOutput = cases[x].output;
        const testOutput = moveZeroesFn(...args);
        const result = testOutput === expectedOutput;
        if (!result) {
            console.error(`[${ x }] FAIL | Expected: ${ expectedOutput } | Got: ${ testOutput }`);
        } else {
            console.log(`[${ x }] Success`);
        }
    }
}
