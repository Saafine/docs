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


function getLandFromList(list, rowIndex) {
    return list.reduce((acc, val, index) => {
        if (val == 1) {
            acc.push([rowIndex, index]);
        }
        return acc;
    }, []);
}

function getLandFromMatrix(grid) {
    return grid.reduce((acc, val, index) => {
        const land = getLandFromList(val, index);
        if (land.length) {
            return acc.concat(land);
        }
        return acc;
    }, []);
}

function mergeIsland(a, b, islands) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for (let key in islands) {
        if (islands[key] === max) {
            islands[key] = min;
        }
    }
}

function isNewIsland([x, y], islands, max) {
    const searchCords = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]]; // TODO could limit so we dont look out of bounds
    let numberOfIsland = null;
    for (let [searchCordX, searchCordY] of searchCords) {
        const partOfIsland = islands['' + searchCordX + searchCordY];
        if (partOfIsland) {
            if (numberOfIsland && partOfIsland !== numberOfIsland) {
                mergeIsland(partOfIsland, numberOfIsland, islands);
                numberOfIsland = Math.min(partOfIsland, numberOfIsland);
            } else {
                numberOfIsland = partOfIsland;
            }
        }
    }
    return numberOfIsland || max + 1;
}

function numIslands(grid) {
    const lands = getLandFromMatrix(grid);
    const islands = {};
    let max = 0;

    for (let land of lands) {
        const islandNumber = isNewIsland(land, islands, max);
        islands['' + land[0] + land[1]] = islandNumber;
        max = islandNumber > max ? islandNumber : max;
    }
    return getMax(islands);
}

function getMax(islands) {
    let max = 0;
    for (let islandsKey in islands) {
        max = islands[islandsKey] > max ? islands[islandsKey] : max;
    }
    return max;
}


trySolution(numIslands, testData);

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
