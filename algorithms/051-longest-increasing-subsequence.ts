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
    },
    {
        args: [[1, 2, 0, 1, 2, 1, 2, 1, 3, 4]], //1, 2, 0, 1, 2, 1, 3, 4
        output: 5
    },
    {
        args: [[3, 1, 4, 3]],
        output: 2
    },
    {
        args: [[10, 12, 20, 6, 7, 8, 9, 3, 5]],
        output: 4
    },
    {
        args: [[808,
            7905,
            9625,
            7874,
            8131,
            8756,
            12843,
            11408,
            9260,
            15106,
            11092,
            16533,
            16862,
            17319,
            19108,
            22263,
            22614,
            15376,
            22711,
            25360]],
        output: 13
    },
    {
        args: [[304,
            6601,
            3040,
            10068,
            11466,
            12288,
            8752,
            16165,
            9690,
            12871,
            12627,
            14062,
            17957,
            20776,
            18354,
            20653,
            19535,
            22028,
            19977,
            17473,
            26922,
            28593,
            26019,
            28271,
            27187,
            28638,
            33000,
            28421,
            26836,
            28748,
            27414,
            36472,
            34452,
            38615,
            39125,
            37237,
            36056,
            42746,
            38499,
            42999,
            39469,
            43232,
            45488,
            48220,
            45543,
            41283,
            45229,
            50226,
            47918,
            53198,
            47783,
            52396,
            55939,
            49492,
            48714,
            49585,
            57410,
            55082,
            58108,
            59386,
            60361,
            58075,
            58022,
            65372,
            57681,
            67516,
            61418,
            64939,
            66041,
            65598,
            65115,
            69248,
            68933,
            72369,
            76425,
            77412,
            76632,
            78943,
            76809,
            75048,
            78128,
            77323,
            75999,
            82237,
            83730,
            83109,
            78279,
            83600,
            86734,
            80967,
            87468,
            87453,
            83461,
            86610,
            94064,
            90990,
            90236,
            92016,
            92701,
            91506]],
        output: 40
    },
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
