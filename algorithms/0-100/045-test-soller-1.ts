const meta = {
    link: '',
    name: '',
    tags: []
};

const testData = [
    {
        args: ['WRRWWR'],
        output: 2
    }
];

function groupBalls(colors) {
    const grouped = [];
    let previous = null;
    for (let color of colors) {
        if (previous === color) {
            grouped[grouped.length - 1].weight++;
        } else {
            previous = color;
            grouped.push({
                color,
                weight: 1
            });
        }
    }
    return grouped;
}

function carryWeightLeft(groupedBalls) {
    let redCountLeft = 0;
    let whiteCountLeft = 0;

    for (let ball of groupedBalls) {
        if (ball.color === 'W') {
            whiteCountLeft = whiteCountLeft + ball.weight;
        } else {
            ball.carryWeightLeft = redCountLeft * whiteCountLeft;
            redCountLeft = redCountLeft + ball.weight;
        }
    }

    return groupedBalls;
}

function solution(colors) {
    let groupedBalls = groupBalls(colors);
    // groupedBalls = carryWeightLeft(groupedBalls);
    // console.log(groupedBalls);

    let seenRed = false;
    for (let x = 0; x < groupedBalls.length; x++) {
        seenRed = seenRed || groupedBalls[x] === 'R';
        if (seenRed  && shouldMove()) {

        }
    }
    // move / dont move
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
