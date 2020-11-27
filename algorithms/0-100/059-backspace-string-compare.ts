const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3291/',
    name: 'Backspace String Compare',
    description: `
    Given two strings S and T, return if they are equal when both are
    typed into empty text editors. # means a backspace character.`,
    tags: ['regexp']
};

const testData = [
    {
        args: ['ab#c', 'ad#c'],
        output: true
    },
    {
        args: ['ab##', 'c#d#'],
        output: true
    },
    {
        args: ['a##c', '#a#c'],
        output: true
    },
    {
        args: ['a#c', 'b'],
        output: false
    },
    {
        args: ['y#fo##f', 'y#f#o##f'], // f - f
        output: true
    }
];

function backspace(str, previous = null) {
    if (str === previous) return str.replace(/#/g, '');
    return backspace(str.replace(/[a-z]#/g, ''), str);
}

function backspaceCompare(strA, strB) {
    return backspace(strA) === backspace(strB);
}

trySolution(backspaceCompare, testData, 4);

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
