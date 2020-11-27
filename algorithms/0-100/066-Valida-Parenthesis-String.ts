const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3301/',
    name: 'Valid Parenthesis String',
    description: `
        Given a string containing only three types of characters: '(', ')' and '*', write a function to
        check whether this string is valid. We define the validity of a string by these rules:
        Any left parenthesis '(' must have a corresponding right parenthesis ')'.
        Any right parenthesis ')' must have a corresponding left parenthesis '('.
        Left parenthesis '(' must go before the corresponding right parenthesis ')'.
        '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
        An empty string is also valid.
    `,
    tags: []
};

const testData = [
    {
        args: ['()'],
        output: true
    },
    {
        args: ['(*)'],
        output: true
    },
    {
        args: ['(*))'],
        output: true
    },
    {
        args: ["(*()"],
        output: true
    }
];

function checkValidString(str) {
    const arr = str.split('');
    const lastIndex = arr.length - 1;

    const closingParenthesis = [];
    const wildcard = [];

    let closingCount = 0;
    let wildcardCount = 0;

    for (let i = lastIndex; i >= 0; i--) {
        const current = arr[i];

        closingCount = current === ')' ? closingCount + 1 : closingCount;
        wildcardCount = current === '*' ? wildcardCount + 1 : wildcardCount;

        closingParenthesis.push(closingCount)
        wildcard.push(wildcardCount);
    }

    wildcard;
    closingParenthesis;

    const arr2 = [];
    let used = 0;
    for (let x = 0; x < arr.length; x++) {
        const current = arr[x];
        if (current === '*') {
            arr2.push(current)
        }
        if (current === '(') {
            const left = closingParenthesis[x] - used;
            if (left > 0) {
                used--;
            } else {

            }
        }
    }

    // return opened === closed;
}

function solution(str) {
    return checkValidString(str);
}

trySolution(solution, testData, 3);

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
