const meta = {
    link: '',
    name: 'Converting roman to number',
    description: ``,
    tags: []
};

const testData = [
    {
        args: ['CCCXII'],
        output: 312
    },
    {
        args: ['XLIV'],
        output: 44
    },
    {
        args: ['LXXXVIII'],
        output: 88
    },
    {
        args: ['XCIX'],
        output: 99
    },
    {
        args: ["MCMXCIV"],
        output: 1994
    }
];


const Roman: {[key: string]: number} = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function romanToInt(str: string) {
    let sum = 0;
    let prev = Number.MAX_VALUE;

    for (let char of str) {
        const value = Roman[char];
        // value - 2 * prev -> example: XL, sum will be 10 + (50 - 2*10) . 2*10 is subtracting for current char and also for previous
        const result = prev < value ? value - 2 * prev : value;
        sum = sum + result;
        prev = Roman[char];
    }

    return Math.abs(sum);
}

trySolution(romanToInt, testData);

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
