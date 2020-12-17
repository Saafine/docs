const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3310/',
    name: 'Jump Game',
    description: `
    Given an array of non-negative integers, you are initially positioned at the first index of the array.
    Each element in the array represents your maximum jump length at that position.
    Determine if you are able to reach the last index.`,
    tags: []
};

const testData = [
    {
        args: [[2, 3, 1, 1, 4]],
        output: true
    },
    {
        args: [[3, 2, 1, 0, 4]],
        output: false
    },
    {
        args: [[0]],
        output: true
    },
    {
        args: [[2, 0, 0]],
        output: true
    },
    {
        args: [[3, 0, 8, 2, 0, 0, 1]],
        output: true
    },
    {
        args: [[3, 2, 1, 0, 4]],
        output: false
    },
    {
        args: [[5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]],
        output: true
    }
];

// https://www.youtube.com/watch?v=oZPXQ7igs6s&list=PLZkKbIOd6ghWU_cA-Rd0XM43Mepm3zEnM&index=22&t=0s
function solutionTaken(nums) {
    let maxIndex = 0;
    for (let x = 0; maxIndex < nums.length - 1; x++) {
        if (nums[x] === 0 && maxIndex <= x) return false;
        maxIndex = Math.max(maxIndex, x + nums[x]);
    }
    return true;
}

function jumpReverse(nums, lastUncheckedIndex, targetIndex) {
    for (let i = lastUncheckedIndex; i >= 0; i--) {
        const jumps = nums[i];
        if (i + jumps >= targetIndex) return i;
    }

    return -1;
}

function getFirstNonZeroOrLast(nums, zeroIndex) {
    for (let x = zeroIndex; x < nums.length; x++) {
        if (nums[x]) return x;
    }
    return nums.length - 1;
}

function makeJumps(nums, index = 0, max = nums.length - 1) {
    const jumps = nums[index];
    const nextJumpIndex = index + jumps;
    const nextJumpValue = nums[nextJumpIndex];

    if (nextJumpIndex >= max) return true;
    if (nextJumpValue !== 0) {
        return makeJumps(nums, nextJumpIndex, max);
    } else {
        const nextNonZeroOrLast = getFirstNonZeroOrLast(nums, nextJumpIndex);
        const reverseJumpIndex = jumpReverse(nums, nextJumpIndex - 1, nextNonZeroOrLast);
        return reverseJumpIndex === -1 ? false : makeJumps(nums, reverseJumpIndex, max);
    }
}


function canJump(nums) {
    if (nums.length === 1) return true;
    return makeJumps(nums);
}

trySolution(solutionTaken, testData);

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
