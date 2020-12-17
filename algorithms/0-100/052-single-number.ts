const meta = {
    link: '',
    name: 'Number without a pair',
    tags: ['Unique number', 'Pairing number', 'Set', 'Bitwise operations']
};

const testData = [
    {
        args: [[2, 2, 1]],
        output: 1
    },
    {
        args: [[4, 1, 2, 1, 2]],
        output: 4
    }
];

function solution3(nums) {
    nums.sort();

    for (let x = 0; x < nums.length; x += 2) {
        if (nums[x] !== nums[x+1]) return nums[x]
    }

    return null;
}

// 2∗(a+b+c)−(a+a+b+b+c)=c
function solution(nums) {
    const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
    return 2 * sum(Array.from(new Set(nums))) - sum(nums);
}

function solution2(nums) {
    let a = 0;
    for (let i of nums) {
        a ^= i;
    }
    return a;
}

trySolution(solution2, testData);

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
