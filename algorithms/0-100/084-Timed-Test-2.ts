const meta = {
    link: '',
    name: '',
    description: ``,
    tags: []
};

const testData = [
    {
        args: [`Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve.`],
        output: 2865
    },
    {
        args: [`why and how`],
        output: 569
    }
];


function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function solution(str: string) {
    return str.replace(/[^a-zA-Z]/g, '').split('').reduce((acc, val) => {
        const vector = isVowel(val) ? -1 : 1;
        return acc + val.charCodeAt(0) * vector;
    }, 0)
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
