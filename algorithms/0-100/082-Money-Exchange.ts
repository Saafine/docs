const meta = {
    link: '',
    name: 'Money exchange',
    description: ``,
    tags: []
};

const testData = [
    {
        args: [10.99, 14],
        output: '3.01'
    }
];

function convertToCents(usd) {
    return usd * 100;
}

function solution(price, bill) {
    const [priceInCents, billInCents] = [price, bill].map(convertToCents);
    const result = billInCents - priceInCents;
    return (result / 100).toFixed(2)
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
