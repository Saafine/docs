const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3312/',
    name: 'Maximal Square',
    description: `Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.`,
    tags: []
};

const testData = [
    {
        args: [
            [
                [1, 1],
                [1, 1]
            ],
        ],
        output: 4
    },
    {
        args: [
            [
                [1, 1],
                [1, 0]
            ],
        ],
        output: 1
    },
    {
        args: [
            [
                [1, 0, 1, 0, 0],
                [1, 0, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 0, 0, 1, 0]
            ],
        ],
        output: 4
    },
    {
        args: [
            [
                [1],
            ],
        ],
        output: 1
    },
    {
        args: [
            [
                [],
            ],
        ],
        output: 0
    },
    {
        args: [
            [
                ['0'],
            ],
        ],
        output: 0
    },
    {
        args: [
            [
                ['1', '1', '0', '1'],
                ['1', '1', '0', '1'],
                ['1', '1', '1', '1']
            ],
        ],
        output: 4
    }
];

// Brute force
function getSquareGrowSizeFromPoint(matrix, startX, startY, trySize = 1) {
    const maxX = startX + trySize;
    const maxY = startY + trySize;

    let x = startX;
    let y = startY;
    
    while (typeof matrix[x] !== 'undefined' && x <= maxX) {
        while (typeof matrix[x][y] !== 'undefined' && y <= maxY) {
            if (matrix[x][y] != 1) return 0;
            if (x === maxX && y === maxY) return 1 + getSquareGrowSizeFromPoint(matrix, startX, startY, trySize + 1);
            y++;
        }

        x++;
        y = startY;
    }

    return 0;
}    



function maximalSquare(matrix) {
    let max = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            const value = matrix[x][y];
            if (value == 0) continue;
            max = max === 0 ? 1 : max; // set max to 1 if '1' found and no squares have been bound yet

            const growSize = getSquareGrowSizeFromPoint(matrix, x, y);
            const size = (growSize + 1) * (growSize + 1);
            max = size > max ? size : max;
        }
    }

    return max;
}

trySolution(maximalSquare, testData);



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
