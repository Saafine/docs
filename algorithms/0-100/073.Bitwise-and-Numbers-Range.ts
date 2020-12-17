const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3308/',
    name: 'Bitwise AND of Numbers Range',
    description: `Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.`,
    tags: []
};

const testData = [
    {
        args: [5, 7],
        output: 4
    },
    {
        args: [0, 1],
        output: 0
    }
];

// https://www.youtube.com/watch?v=SLm32aRonv4&list=PLZkKbIOd6ghWU_cA-Rd0XM43Mepm3zEnM&index=24
function rangeBitwiseAnd(m, n) {
    let shift = 0;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
}

trySolution(rangeBitwiseAnd, testData);

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
