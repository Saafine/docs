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
        args: ['bcd', 'ace'],
        output: 1
    },
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


function longestCommonSubsequence(strA, strB) {
    const arrA = strA.split('');
    const arrB = strB.split('');

    const DP = [];

    for (let i = 0; i < arrA.length; i++) {
        const arr = [];
        DP.push(arr);
        for (let j = 0; j < arrB.length; j++) {
            if (arrA[i] === arrB[j]) {
                DP[i][j] = i === 0 || j === 0 ? 1 : DP[i - 1][j - 1] + 1;
            } else {
                let a = 0;
                let b = 0;
                ''
                try { a = DP[i - 1][j] || 0 } catch (e) {}
                try { b = DP[i][j - 1] || 0} catch (e) {}

                DP[i][j] = Math.max(a, b);
            }
        }
    }

    return DP[arrA.length - 1][arrB.length - 1]
}

trySolution(longestCommonSubsequence, testData);

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
