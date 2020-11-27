const meta = {
    link: '',
    name: '',
    description: `Find the smallest positive integer that does not occur in a given sequence`,
    tags: []
};

const testData = [
    {
        args: [[1,3,6,4,1,2]],
        output: 5
    }
];


function solution(A) {
    // const positive = Array.from(new Set(A.filter(a => a > 0).sort()));
    // let tryLowest = 1;
    // for (let x = 0; x < positive.length; x++) {
    //     if (positive[x] !== tryLowest) return tryLowest;
    //     tryLowest++;
    // }
    // return tryLowest;
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
