const meta = {
    link: '',
    name: '',
    tags: []
};

const testData = [
    {
        args: [[1, 1, 1, 2, 2, 3], 6],
        output: '7.0686'
    },
    {
        args: [[4, 3, 3], 3],
        output: '28.2743'
    },
    {
        args: [[5], 5],
        // output: '15.7079'
        output: '15.7080'
    },
    {
        args: [[ 6, 7 ], 12],
        output: '21.9911'
    }
];

function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

function round(value) {
    return Math.round(value * 10000) / 10000
}

function largestSegment(radii, segments) {
    const areas = radii.sort((a, b) => b - a).map(getCircleArea);

    console.log(areas);
    console.log(segments);
    // we can filter all radiuses smaller then seg min
    return getOptimalSegment(areas, segments, areas[0]).toFixed(4)
}

// try seg initially segMax
function getOptimalSegment(areas, segments, trySeg, safety = 0) {
    if (safety === 2) return;
    let segmentsLeft = segments;
    let tryNext = 0;

    for (let x = 0; x < areas.length; x++) {
        if (trySeg > areas[x]) {
            tryNext = tryNext > areas[x] ? tryNext : areas[x];
            break;
        }

        const segmentsOnArea = fitSegments(areas[x], trySeg);
        console.log(segmentsOnArea);
        segmentsLeft = segmentsLeft - segmentsOnArea;
        if (segmentsLeft <= 0) return trySeg;

        // const tryNextOne = areas[x] / Math.ceil(segmentsOnArea) - 1;
        // const tryNextOne2 = areas[x] / Math.ceil(segmentsOnArea);
        // const tryNextTemp = areas[x] % trySeg ? tryNextOne2 : tryNextOne;
        // tryNext = tryNextTemp > tryNext ? tryNextTemp : tryNext;
        // console.log(tryNext);
    }

    if (safety === 1) {
        console.log(areas , tryNext);

    }
    return getOptimalSegment(areas, segments, tryNext, ++safety);
}

function fitSegments(area, trySeg) {
    const segmentsOnArea = round(area / trySeg);
    const reducedSegments = Math.floor(segmentsOnArea);
    return reducedSegments;
}

trySolution(largestSegment, testData, 1);

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
