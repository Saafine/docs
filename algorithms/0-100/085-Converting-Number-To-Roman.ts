const meta = {
    link: '',
    name: 'Converting number to roman',
    description: ``,
    tags: []
};

const testData = [
    {
        args: [312],
        output: 'CCCXII'
    },
    {
        args: [44],
        output: 'XLIV'
    },
    {
        args: [88],
        output: 'LXXXVIII'
    },
    {
        args: [99],
        output: 'XCIX'
    }
];


const Roman = {
    A: ['I', 'X', 'C', 'M'],
    B: ['V', 'L', 'D', '_'],
    C: ['X', 'C', 'M', '_'],
}

function splitNumber(num: number): number[] {
    return String(num).split('').map(Number);
}

function fill(char: string, times: number): string {
    return Array(times).fill(char).join('').toString();
}

function solution(num: number) {
    const digits = splitNumber(num);
    let result = '';

    let lookupIndex = 0;
    for (let x = digits.length - 1; x >= 0; x--) {
        const digit = digits[x];
        if (digit < 4) {
            result = fill(Roman['A'][lookupIndex], digit) + result;
        } else if (digit === 4) {
            result = Roman['A'][lookupIndex] + Roman['B'][lookupIndex] + result;
        } else if (digit < 9) {
            result = Roman['B'][lookupIndex] + fill(Roman['A'][lookupIndex], digit - 5) + result;
        } else {
            result = Roman['A'][lookupIndex] + Roman['C'][lookupIndex] + result;
        }

        lookupIndex++;
    }

   return result;
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
