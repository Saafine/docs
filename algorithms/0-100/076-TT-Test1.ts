const meta = {
    link: '',
    name: '',
    description: ``,
    tags: []
};

const WRONG_ANSWER = 'Wrong answer';
const OK_ANSWER = 'OK';
const RUNTIME_ERROR = 'Runtime error';
const TIME_ERROR = 'Time limit exceeded';

const testData = [
    {
        args: [["test1a", "test2", "test1b", "test1c", "test3"], [WRONG_ANSWER, OK_ANSWER, RUNTIME_ERROR, OK_ANSWER, TIME_ERROR]],
        output: 33
    },
    {
        args: [["codility1", "codility3", "codility2", "codility4b", "codility4a"], [WRONG_ANSWER, OK_ANSWER, OK_ANSWER, RUNTIME_ERROR, OK_ANSWER]],
        output: 50
    }
];


function getGroupIndex(groupName) {
    return groupName.match(/\d+/)[0];
}

function solution(testNames, results) {
    const groups = {};

    testNames.forEach((testName, index) => {
        const group = getGroupIndex(testName);
        if (typeof groups[group] === 'undefined') {
            groups[group] = [results[index]]
        } else {
            groups[group].push(results[index])
        }
    })

    const totalGroups = Object.keys(groups).length;

    let okayGroups = 0;

    for (let x in groups) {
        const isOkay = groups[x].every((result) => result === OK_ANSWER);
        if (isOkay) okayGroups++;
    }

    return Math.floor(okayGroups / totalGroups * 100)
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
