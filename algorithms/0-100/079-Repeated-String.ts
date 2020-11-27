const meta = {
    link: 'https://www.hackerrank.com/challenges/repeated-string/problem',
    name: 'Repeated String',
    description: `Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
    Given an integer, n , find and print the number of letter a's in the first  letters of Lilah's infinite string.`,
    tags: []
};


const testData = [
    {
        args: ['abcac', 10],
        output: 4 // found 4 as
    },
    {
        args: ['aba', 10],
        output: 7
    },
    {
        args: ['a', 1000000000000],
        output: 1000000000000
    }
];


function solution(str, nums) {
    const strLength = str.length;

    const extraIterations = Math.floor(nums / strLength);
    const firstIterations = nums % strLength;

    let count = 0;
    for (let x = 0; x < strLength; x++) {
        if (x < firstIterations && str[x] === 'a') {
            count++;
        }

        if (str[x] === 'a' && extraIterations) {
            count = count + extraIterations;
        }
    }

    return count
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
