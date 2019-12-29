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


function getMaxRadiusAndTotalArea(radii) {
    return radii.reduce((acc, val) => {
        let [biggestCircleArea, totalArea] = acc;
        const area = getCircleArea(val);

        if (biggestCircleArea < area) {
            biggestCircleArea = area;
        }

        return [biggestCircleArea, totalArea + getCircleArea(val)];
    }, [0, 0]);
}

function getAreas(radii) {
    return radii.map(getCircleArea);
}

function largestSegment(radii, segments) {
    radii.sort((a, b) => b - a);
    const [, totalArea] = getMaxRadiusAndTotalArea(radii);
    const segMax = totalArea / segments;
    console.log(segments);
    console.log(segMax);
    console.log(totalArea);
    console.log(getAreas(radii));
    const trySeg = segMax;
    // console.log(totalArea);

    // we can filter all radiuses smaller then seg min
    return getOptimalSegment(getAreas(radii), segments, trySeg).toFixed(4)
}

// try seg initially segMax
function getOptimalSegment(areas, segments, trySeg, safety = 0) {
    // if (safety > 1) throw Error('Safety check');

    // if (safety > 2) {
    //     console.log(trySeg);
    // }
    let segmentsLeft = segments;
    let tryNext = 0;
    for (let x = 0; x < areas.length; x++) {
        const segmentsOnArea = round(areas[x] / trySeg);
        const reducedSegments = Math.floor(segmentsOnArea);
        // console.log(safety);
        // if (safety === 0) {
        //     console.log(areas[x] / trySeg);
        //     console.log(round(areas[x] / trySeg));
        //     trySeg
        //     console.log(reducedSegments);
        // }
        segmentsLeft = segmentsLeft - reducedSegments;
        // console.log(segmentsLeft);
        if (segmentsLeft <= 0) return trySeg;

        const tryNextOne = areas[x] / Math.ceil(segmentsOnArea) - 1;
        const tryNextOne2 = areas[x] / Math.ceil(segmentsOnArea);
        const tryNextTemp = areas[x] % trySeg ? tryNextOne2 : tryNextOne;
        // console.log({tryNextOne, tryNextOne2, tryNextTemp});

        tryNext = tryNextTemp > tryNext ? tryNextTemp : tryNext;
    }

    return getOptimalSegment(areas, segments, tryNext, ++safety);
}

trySolution(largestSegment, testData, 3);

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
