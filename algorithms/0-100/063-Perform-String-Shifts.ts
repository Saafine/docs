const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3299/',
    name: 'Perform String Shifts',
    description: `
        You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
        direction can be 0 (for left shift) or 1 (for right shift). 
        amount is the amount by which string s is to be shifted.
        A left shift by 1 means remove the first character of s and append it to the end.
        Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
        Return the final string after all operations.
    `,
    tags: []
};

const testData = [
    {
        args: ['abc', [[0, 1], [1, 2]]],
        output: 'cab'
    },
    {
        args: ['abcdefg', [[1, 1], [1, 1], [0, 2], [1, 3]]],
        output: 'efgabcd'
    }
];

function shiftLeft(str, shifts) {
    if (shifts === 0 ) return str;
    const left = str.slice(0, shifts);
    const right = str.slice(shifts);
    return right.concat(left);
}

function shiftRight(str, shifts) {
    if (shifts === 0 ) return str;
    const left = str.slice(-shifts);
    const right = str.slice(0, str.length - shifts);
    return left.concat(right);
}

function stringShift(str, shifts) {
    return shifts.reduce((acc, [vector, shifts]) => {
        const shiftsReduced = shifts % str.length;
        return vector ? shiftRight(acc, shiftsReduced) : shiftLeft(acc, shiftsReduced)
    }, str)
}

trySolution(stringShift, testData);

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
