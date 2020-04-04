const meta = {
    link: '',
    name: 'longest increasing sub sequence',
    tags: []
};

const testData = [
    {
        args: [[10, 9, 2, 5, 3, 7, 101, 18]], // 2, 5, 7, 101
        output: 4
    },
    {
        args: [[10, 12, 20, 6, 7, 8, 9, 3, 5]],
        output: 4
    },
    {
        args: [[1, 555, 6]],
        output: 2
    },
    {
        args: [[1, 2, 3, 4, 5, 555, 6, 7, 8, 9]],
        output: 9
    },
    {
        args: [[808, 7905, 9625, 7874, 8131]],
        output: 3
    },
    {
        args: [[1, 4, 3]],
        output: 2
    },
    {
        args: [[]],
        output: 0
    },
    {
        args: [[1]],
        output: 1
    },
    {
        args: [[5, 1, 4, 5, 2, 6]],
        output: 4
    },
    {
        args: [[1, 2, 0, 1, 2, 1, 2, 1, 3, 4]],
        output: 5
    },
    {
        args: [[3, 1, 4, 3]],
        output: 2
    },
    {
        args: [[10, 12, 20, 6, 7, 8, 9, 3, 5]],
        output: 4
    }
];

function getRemovedElementsWhenElementPicked(arr, element) {
    return arr.filter((restElement) => {
        return restElement.index < element.index || restElement.value < element.value;
    });
}


function filterAll(arr, filteredArray, el) {
    const indexesToFilterOut = filteredArray.map(value => value.index);
    return arr.filter(({ index }) => {
        return !indexesToFilterOut.includes(index)
    }).filter((x) => x.value !== el.value) // TODO [P. Labus] filter the same values
}

function flatUnique(arr) {
    const mem = {};
    return arr.reduce((acc, value) => {
        value.forEach((val) => {
            if (!mem[val.index]) {
                acc.push(val);
                mem[val.index] = val.value;
            }
        });
        return acc;
    }, []);
}

function xxx(arr, count = 0) {
    if (arr.length === 0) return count;
    const element = arr[0];
    const remainder = arr.slice(1);
    const removedElementsWhenElementPicked = getRemovedElementsWhenElementPicked(remainder, element);
    const whatWouldBeLostIfWeDidNotRemoveElements = flatUnique(removedElementsWhenElementPicked.map((el) => getRemovedElementsWhenElementPicked(remainder.slice(el.index), el)));

    const val = 0;
    if (removedElementsWhenElementPicked.length <= whatWouldBeLostIfWeDidNotRemoveElements.length + 1) { // + 1 because we at least lose the current element
        const next = filterAll(remainder, removedElementsWhenElementPicked, element);
        if (count === val) {
            // console.log(removedElementsWhenElementPicked.length);
            // removedElementsWhenElementPicked.length;
            // console.log(removedElementsWhenElementPicked);
            console.log(removedElementsWhenElementPicked.length);
            console.log(whatWouldBeLostIfWeDidNotRemoveElements.length + 1);
            // ;
            element;
            // next;
        }
        return xxx(next, count + 1);
    } else {
        // if (count === val) {
        //     // removedElementsWhenElementPicked;
        //     // whatWouldBeLostIfWeDidNotRemoveElements;
        //     // removedElementsWhenElementPicked
        //     // whatWouldBeLostIfWeDidNotRemoveElements
        //     // element;
        //     // remainder;
        //     throw Error('')
        // }
        return xxx(remainder, count);
    }
}

function findLIS(arr) {
    arr
    const indexedArray = arr
        .map((x, i) => ({ value: x, index: i }))
        .sort((a, b) => a.value - b.value);
    return xxx(indexedArray);
}

function solution(arr) {
    return findLIS(arr);
}

trySolution(solution, testData, 1);

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
