const meta = {
    link: '',
    name: 'longest increasing sub sequence',
    tags: []
};

const testData = [
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
    }, {
        args: [[1, 2, 0, 1, 2, 1, 2, 1,3, 4]], //1, 2, 0, 1, 2, 1, 3, 4
        output: 5
    }
];

class Bucket {
    size = 0;
    max = null;

    // inside = [];

    constructor(max) {
        this.add(max);
    }

    add(element) {
        // this.inside.push(element);
        this.max = element;
        this.size++;
    }

    canAdd(element) {
        return this.max < element;
    }

    getSize() {
        return this.size;
    }
}

function findLIS(arr) {
    const buckets = [];
    let maxSize = 0;

    arr.forEach((element) => {
        let added = false;

        buckets.forEach((bucket) => {
            if (bucket.canAdd(element)) {
                bucket.add(element);
                maxSize = bucket.getSize() > maxSize ? bucket.getSize() : maxSize;
                added = true;
            } else {
                added = false;
            }
        });

        if (added === false) {
            buckets.push(new Bucket(element));
            maxSize = maxSize === 0 ? 1 : maxSize;
        }
    });

    return maxSize;
}

function solution(arr) {
    return findLIS(arr);
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
