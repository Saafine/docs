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
    },
    {
        args: [['1']],
        output: 1
    },
    {
        args: [[
            ['0', '1', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '1'],
            ['1', '0', '1', '0', '0', '1', '1', '0', '0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '0', '0'],
            ['0', '1', '0', '0', '0', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '1'],
            ['1', '1', '0', '0', '0', '1', '1', '0', '0', '0', '1', '1', '1', '0', '0', '1', '0', '1', '1', '0'],
            ['0', '1', '0', '1', '1', '0', '1', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '1'],
            ['1', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '1', '0', '0', '1', '0', '0', '0', '0'],
            ['1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '1'],
            ['1', '0', '0', '0', '1', '0', '1', '1', '1', '0', '1', '0', '1', '1', '1', '1', '0', '0', '0', '1'],
            ['1', '0', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1'],
            ['0', '0', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '0', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '0', '0', '0'],
            ['0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '0', '1', '0'],
            ['1', '0', '0', '0', '1', '1', '1', '0', '1', '0', '0', '0', '1', '0', '1', '0', '1', '0', '0', '1'],
            ['0', '0', '0', '0', '1', '0', '1', '1', '0', '1', '0', '1', '0', '1', '1', '1', '1', '0', '0', '0'],
            ['0', '1', '1', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '0', '0', '1', '1', '0', '1', '0'],
            ['1', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '1', '0', '0', '1', '0', '0', '0', '1'],
            ['1', '0', '0', '0', '1', '0', '1', '0', '0', '1', '0', '1', '0', '0', '1', '0', '0', '1', '1', '1'],
            ['0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '1', '0', '1', '1', '1', '0', '0', '0', '0'],
            ['0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '0', '1', '0', '0', '0', '1', '1'],
            ['1', '0', '0', '0', '1', '0', '1', '1', '1', '0', '0', '1', '0', '1', '0', '1', '1', '0', '0', '0']
        ]],
        output: 55
    }
];


function numIslands(grid) {
    if (grid.length === 0) return 0;

    const memory = {};
    const maxX = grid.length - 1;
    const maxY = grid[0].length - 1;

    function visited(x, y) {
        return memory[x + '-' + y];
    }

    function visit(x, y) {
        memory[x + '-' + y] = 1;
    }

    function outOfGrid(x, y, maxX, maxY) {
        const leftGridMax = x > maxX || y > maxY;
        const leftGridMin = x < 0 || y < 0;
        return leftGridMax || leftGridMin;
    }

    function searchIsland(x = 0, y = 0) {
        const next = getNextUnvisitedIsland(x, y);
        if (next) {
            walkIsland(next[0], next[1]);
            return 1 + searchIsland(next[0], next[1]);
        } else {
            return 0;
        }
    }

    function getNextUnvisitedIsland(startX, startY) {
        for (let x = startX; x < grid.length; x++) {
            for (let y = startY; y < grid[x].length; y++) {
                if (!visited(x, y) && isIsland(x, y)) return [x, y];
            }
            startY = 0;
        }

        return null;
    }

    function isIsland(x, y) {
        return grid[x][y] == 1;
    }

    function walkIsland(x, y) {
        if (visited(x, y) || !isIsland(x, y)) return;
        visit(x, y);
        const searchCords = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]].filter(([a, b]) => !(visited(a, b) || outOfGrid(a, b, maxX, maxY)));
        searchCords.forEach(([searchCordX, searchCordY]) => {
            walkIsland(searchCordX, searchCordY);
        });
    }

    return searchIsland();
}

// trySolution(numIslands, testData);

class Solution {
    numIslands(grid) {
        let islands = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] == 1) {
                    islands++;
                    this.mark(grid, row, col);
                }
            }
        }

        return islands;
    }

    mark(grid, row, col) {
        grid[row][col] = '-';

        // up
        if (row > 0 && grid[row - 1][col] == 1) {
            this.mark(grid, row - 1, col);
        }

        // down
        if (row < grid.length - 1 && grid[row + 1][col] == 1) {
            this.mark(grid, row + 1, col);
        }

        // left
        if (col > 0 && grid[row][col - 1] == 1) {
            this.mark(grid, row, col - 1);
        }

        // right
        if (col < grid[row].length - 1 && grid[row][col + 1] == 1) {
            this.mark(grid, row, col + 1);
        }
    }
}
const solve = new Solution();
trySolution(solve.numIslands.bind(solve), testData)

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
