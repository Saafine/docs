const meta = {
    link: '',
    name: 'Carry Operations Adding',
    description: `Adding big numbers`,
    tags: []
};

const testData = [
    {
        args: [120, 5],
        output: '125'
    },
    {
        args: [129, 5],
        output: '134'
    },
    {
        args: [2, 2],
        output: '4'
    },
    {
        args: [2, 4312432432],
        output: '4312432434'
    }
];


function solution(a, b) {
    const aDigits = String(a).split('').map(Number)
    const bDigits = String(b).split('').map(Number)

    let pointer = 0;

    let result = '';
    let rest = 0;

    while(true) {
        const indexA = (aDigits.length - 1) - pointer;
        const indexB = (bDigits.length - 1) - pointer;

        if (indexA < 0 && indexB < 0) {
            return result;
        }

        const valueA = indexA < 0 ? 0 : aDigits[indexA];
        const valueB = indexB < 0 ? 0 : bDigits[indexB];

        const sum = valueA + valueB + rest;
        const remainder = sum % 10;

        rest = Math.floor(sum / 10);
        result = remainder + result;

        pointer++;
    }
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
