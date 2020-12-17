const meta = {
    link: '',
    name: '',
    description: ``,
    tags: []
};

const testData = [
    {
        args: [[['item1', '10', '15'], ['item2', '3', '4'], ['item3', '17', '8']], 1, 0, 2, 1],
        output: ['item3']
    },
    {
        args: [[['p1', '1', '2'], ['p2', '2', '1']], 0, 0, 1, 0],
        output: ['p1']
    }
];

function getSortedItems(items, sortParameter, sortOrder) {
    const sorted = [...items].sort((a, b) => {
        if (sortParameter === 0) {
            if (a[0] < b[0])
                return -1;
            if (a[0] > b[0])
                return 1;
            return 0;
        }
        return  Number(a[sortParameter]) - Number(b[sortParameter]);
    });

    return !sortOrder ? sorted : sorted.reverse();
}

function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    const sortedItems = getSortedItems(items, sortParameter, sortOrder);
    const start = pageNumber * itemsPerPage;
    const end = pageNumber + itemsPerPage;
    const result = sortedItems.slice(start, end);
    return result.map(x => x[0]);
}

trySolution(fetchItemsToDisplay, testData);

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
