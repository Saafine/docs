// TODO [P. Labus] needs improving
const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3292/',
    name: 'Min Stack',
    description: `
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
        push(x) -- Push element x onto stack.
        pop() -- Removes the element on top of the stack.
        top() -- Get the top element.
        getMin() -- Retrieve the minimum element in the stack.
    `,
    tags: []
};

const testData = [
    {
        args: [],
        output: undefined
    }
];


class MinStack {
    value;
    minValueIndexes;
    minValue;

    constructor() {
        this.value = [];
        this.minValueIndexes = [];
        this.minValue = null;
    }

    push(value) {
        this.value.push(value);
        this.setMinValue();
    }

    pop() {
        this.value.pop();
        this.setMinValue();
    }

    getMin() {
        return this.minValue;
    }

    top() {
        return this.value[this.value.length - 1];
    }

    setMinValue() {
        this.minValue = Math.min(...this.value);
    }
}

// trySolution(solution, testData);

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
