const meta = {
    link: '',
    name: 'Fibonacci sum of odd numbers',
    description: ``,
    tags: []
};

const testData = [
    {
        args: [5],
        output: 10
    },
    {
        args: [],
        output: 10
    }
];



function solution(): number {
    let mem = {};

    function fibonacci(to: number) {
        if (to === 0 || to === 1) return 1;
        return fibonacci(to - 1) + fibonacci(to - 2);
    }

    const max = 10_000;
    let oddSum = 0;
    let index = 0;

    while (true) {
        const value = fibonacci(index);
        if (value > max) {
            return oddSum;
        } else if (value & 1) {
            oddSum+=value;
        }

        mem[index] = value;
        index++;
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
