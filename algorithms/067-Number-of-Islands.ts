const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3302/',
    name: 'Number of Islands',
    description: `Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
    You may assume all four edges of the grid are all surrounded by water.`,
    tags: []
};

const testData = [
    {
        args: [[
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]],
        output: 1
    },
    {
        args: [[
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1]
        ]],
        output: 3
    },
    {
        args: [[
            [1, 0, 0],
            [1, 0, 1],
        ]],
        output: 2
    },
    {
        args: [[
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0']]
        ],
        output: 1
    },
    {
        args: [[
            ['1', '1', '1'],
            ['0', '1', '0'],
            ['1', '1', '1']
        ]],
        output: 1
    },
    {
        args: [[
            ['1', '0', '1', '1', '1'],
            ['1', '0', '1', '0', '1'],
            ['1', '1', '1', '0', '1']
        ]],
        output: 1
    },
    {
        args: [[
            ['1', '0', '0', '1', '1', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['1', '0', '0', '1', '1', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0'],
            ['0', '0', '0', '1', '1', '1', '1', '0', '1', '0', '1', '1', '0', '0', '0', '0', '1', '0', '1', '0'],
            ['0', '0', '0', '1', '1', '0', '0', '1', '0', '0', '0', '1', '1', '1', '0', '0', '1', '0', '0', '1'],
            ['0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            ['1', '0', '0', '0', '0', '1', '0', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '1'],
            ['0', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '0', '0', '1', '0', '1', '0', '0', '1', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '0'],
            ['0', '0', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '1'],
            ['0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '1', '0'],
            ['1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '1', '0', '1', '0'],
            ['0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '0'],
            ['1', '1', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1'],
            ['0', '1', '0', '0', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0', '0', '0'],
            ['0', '0', '1', '1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '1', '0', '1', '0', '0', '0', '0'],
            ['1', '0', '0', '1', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '1'],
            ['1', '0', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '1', '0', '1', '0', '0', '0', '0'],
            ['0', '1', '1', '0', '0', '0', '1', '1', '1', '0', '1', '0', '1', '0', '1', '1', '1', '1', '0', '0'],
            ['0', '1', '0', '0', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '1'],
            ['0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '0']
        ]],
        output: 58
    }
];

const memory = {};
let walks = 0;

function visited(x, y) {
    return memory['' + x + y];
}

function visit(x, y) {
    memory['' + x + y] = 1;
}

function outOfGrid(x, y, maxX, maxY) {
    const leftGridMax = x > maxX || y > maxY;
    const leftGridMin = x < 0 || y < 0;
    return leftGridMax || leftGridMin;
}

function walkIslands(grid, maxX, maxY, x = 0, y = 0, partOfIsland = false, safety = 0) {
    console.log('here', [x, y]);
    if (visited(x, y)) return;
    visit(x, y);
    const isIsland = grid[x][y] == 1;

    if (isIsland && !partOfIsland) {
        walks++
    }

    if (isIsland) {
        const searchCords = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]].filter(([a, b]) => !visited(a, b) && !outOfGrid(a, b, maxX, maxY));
        searchCords.forEach(([searchCordX, searchCordY]) => {
            walkIslands(grid, maxX, maxY, searchCordX, searchCordY, true, safety + 1)
        })
    }

    if (partOfIsland) return;

    if (x == maxX && y == maxY) {
        console.log(x);
        return;
    } else if (y == maxY) {
        walkIslands(grid, maxX, maxY, x + 1, 0, false, safety + 1);
    } else {
        walkIslands(grid, maxX, maxY, x, y + 1, false, safety + 1);
    }
}

function numIslands(grid) {
    walkIslands(grid, grid.length - 1, grid[0].length - 1);
    return walks;
}


trySolution(numIslands, testData, 1);

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
