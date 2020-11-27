const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3300/',
    name: 'Product of Array Except Self',
    description: `
    Given an array nums of n integers where n > 1, 
    return an array output such that output[i] is equal
    to the product of all the elements of nums except nums[i].
    Constraint: It's guaranteed that the product of the elements
    of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
    Note: Please solve it without division and in O(n).
    Follow up:
    Could you solve it with constant space complexity?
    (The output array does not count as extra space for the purpose of space complexity analysis.)
     `,
    tags: []
};

const testData = [
    {
        args: [[1, 2, 3, 4]],
        output: [24, 12, 8, 6]
    },
    {
        args: [[1, 1]],
        output: [1, 1]
    }
];

function fromLeft(arr) {
    return arr.reduce((acc, val, index) => {
        if (index === 0) {
            acc.push(val);
        } else {
            acc.push(val * acc[index - 1]);
        }
        return acc;
    }, []);
}

function fromRight(arr) {
    return arr.reduceRight((acc, val, index) => {
        if (index === arr.length - 1) {
            acc.push(val);
        } else {
            acc.push(val * acc[acc.length - 1]);
        }
        return acc;
    }, []).reverse();
}

function productExceptSelf(arr) {
    const left = fromLeft(arr);
    const right = fromRight(arr);
    return arr.map((_, index) => {
        const onLeft = index === 0 ? 1 : left[index - 1];
        const onRight = index === arr.length - 1 ? 1 : right[index + 1];
        return onLeft * onRight;
    });
}

trySolution(productExceptSelf, testData);

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
