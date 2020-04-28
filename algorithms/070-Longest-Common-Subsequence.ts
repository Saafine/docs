const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3311/',
    name: 'Longest Common Subsequence',
    description: `
    Given two strings text1 and text2, return the length of their longest common subsequence.
    A subsequence of a string is a new string generated from the original string with some
    characters(can be none) deleted without changing the relative order of the remaining characters. 
    (eg, "ace" is a subsequence of "abcde" while "aec" is not). 
    A common subsequence of two strings is a subsequence that is common to both strings.
    If there is no common subsequence, return 0.`,
    tags: []
};

const testData = [
    {
        args: ['abc', 'def'],
        output: 0
    },
    {
        args: ['abcde', 'ace'],
        output: 3
    },
    {
        args: ['abc', 'abc'],
        output: 3
    }
];


function solution(strA, strB) {
    const arrA = strA.split('');
    const arrB = strB.split('');

    const mem = {};
    for (let x = 0; x < arrA.length; x++) {
        mem[arrA[x]] = {};
        for (let y = x; y < arrB.length; y++) {
            mem[arrA[x]][arrB[y]]= {}
        }
    }

    mem;
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
