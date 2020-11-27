const meta = {
    link: '',
    name: '',
    description: ``,
    tags: []
};

const testData = [
    {
        args: [[7, 3, 7, 3 , 1, 3, 4, 1]], // 2 , 6
        output: 5 // shortest trip to visit all destinations
    },
    {
        args: [[2, 1, 1, 3, 2, 1, 1, 3]],
        output: 3
    },
    {
        args: [[7, 5, 2, 7, 2, 7, 4, 7]],
        output: 6
    }
];


function solution(trips) {
    let maxUniqueTrips = null;
    let start = null;
    let end = null;

    for (let x = 0; x < trips.length; x++) {
        let tempUniqueTrips = 0;
        let unique = {};
        let left = x;

        while (tempUniqueTrips !== maxUniqueTrips && left < trips.length - 1) {
            const tripId = trips[left];

            if (typeof unique[tripId] === 'undefined') {
                unique[tripId] = 1;
                tempUniqueTrips++;
            }

            if (maxUniqueTrips === tempUniqueTrips) {
                start = x;
                end = left;
            }

            left++;
        }

        if (x === 0) {
            maxUniqueTrips = tempUniqueTrips;
        } else {
            if (tempUniqueTrips < maxUniqueTrips) break;
        }
    }

    return end - start + 1;
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
