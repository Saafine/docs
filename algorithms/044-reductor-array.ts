const meta = {
    link: '',
    name: '',
    tags: []
};

const testData = [
    {
        args: [[7, 5, 9], [13, 1, 4], 3],
        output: 1
    }
];

function doesNotMeetCriterion(value: number, d: number): boolean {
    return value <= d;
}

function comparatorValue(compareA: number[], compareB: number[], d: number) {
    let comparatorValue = 0;
    for (let a = 0; a < compareA.length; a++) {
        for (let b = 0; b < compareB.length; b++) {
            const result: number = Math.abs(compareA[a] - compareB[b]);
            if (doesNotMeetCriterion(result, d)) break;
            if (b === compareB.length - 1) comparatorValue++;
        }
    }
    return comparatorValue;
}

trySolution(comparatorValue, testData);

function trySolution(comparatorValueFn, cases, specifyIdx = undefined) {
    let casesLen = cases.length;
    let startIdx = specifyIdx || 0;
    if (typeof specifyIdx !== 'undefined') {
        casesLen = startIdx + 1;
    }

    for (let x = startIdx; x < casesLen; x++) {
        const args = cases[x].args;
        const expectedOutput = cases[x].output;
        const testOutput = comparatorValueFn(...args);
        const result = testOutput === expectedOutput;
        if (!result) {
            console.error(`[${ x }] FAIL | Expected: ${ expectedOutput } | Got: ${ testOutput }`);
        } else {
            console.log(`[${ x }] Success`);
        }
    }
}
