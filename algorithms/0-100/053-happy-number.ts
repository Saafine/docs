const meta = {
    link: '',
    name: 'Happy number',
    tags: []
};

const testData = [
    {
        args: [19],
        output: true
    },
    {
        args: [4],
        output: false
    }
];

function split(number) {
    return String(number).split('').map(Number)
}

function getSumOfSquaresOfDigits(numbers) {
    return numbers.reduce((acc, val) => acc + val**2, 0)
}

function isHappy(number) {
    if (number === 4) return false;
    if (number === 1) return true;
    const sumOfSquaresOfDigits = getSumOfSquaresOfDigits(split(number));
    return isHappy(sumOfSquaresOfDigits);
}

trySolution(isHappy, testData, 1);

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
