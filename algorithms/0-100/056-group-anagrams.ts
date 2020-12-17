const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3288/',
    name: 'Group Anagrams',
    description: `Given an array of strings, group anagrams together.`,
    tags: ['anagram']
};

const testData = [
    {
        args: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
        output: [
            ['ate', 'eat', 'tea'],
            ['nat', 'tan'],
            ['bat']
        ]
    }
];

function toExtraString(str) {
    return {
        value: str,
        sorted: str.split('').sort().join('')
    };
}

function groupAnagrams(arr) {
    const extraStrings = arr.map(toExtraString);
    return Object.values(extraStrings.reduce((acc, {sorted, value}) => {
        if (acc[sorted]) {
            acc[sorted].push(value);
        } else {
            acc[sorted] = [value];
        }
        return acc;
    }, {}));
}

trySolution(groupAnagrams, testData);

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
