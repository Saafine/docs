const meta = {
    link: '',
    name: '',
    description: ``,
    tags: []
};

const testData = [
    {
        args: ['11 11 11 11 11 11 11 11 11 11'],
        output: 20
    },
    {
        args: ['5/ 4/ 3/ 2/ 1/ 0/ X 9/'],
        output: 110
    },
    {
        args: ['X X X X X X X X X XXX'],
        output: 300
    },
    {
        args: ['5/ 4/ 3/ 2/ 1/ 0/ X 9/ 4/ 7/2'],
        output: 143
    },
    {
        args: ['X X X'],
        output: 60
    },
    { //  10 + 9 + 1 + 10
        args: ['X 9/'],
        output: 30
    }
];

console.log(scoreGame(testData[2].args[0]));

function scoreGame(input) {
    var frames = input.match(/[0-9X\-\/]{1,3}/g);
    var balls = [], score = 0;

    frames.forEach(function(e, i) {
        var last = 0;
        if (e[0] === 'X') {
            balls.push({ 'pins': 10, 'strike': true });
        } else {
            if (e[0] !== '-') {
                last = parseInt(e[0]);
                balls.push({ 'pins': last });
            } else balls.push({ 'pins': 0 });

            if (e[1] === '/') {
                balls.push({ 'pins': 10 - last, 'spare': (i !== 9 ? true : false) }); // No bonus @ the last frame
            } else if (e[1] !== '-') {
                balls.push({ 'pins': parseInt(e[1]) });
            } else if (e[1] === 'X') { // 2nd ball last frame, no bonus awarded
                balls.push({ 'pins': 10 });
            } else balls.push({ 'pins': 0 });
        }

        if (e[2]) { // 3rd ball, last frame
            if (e[2] === 'X') {
                balls.push({ 'pins': 10 });
            } else if (e[2] !== '-') {
                balls.push({ 'pins': parseInt(e[2]) });
            }
        }
    });

    while (balls.length < 21) balls.push({ 'pins': 0 });

    balls.forEach(function(e, i) {
        score += e.pins;
        if (e.strike) score += balls[i + 1].pins + balls[i + 2].pins;
        if (e.spare) score += balls[i + 1].pins;
    });
    return score;
}

function bowlingScore(frames) {
    const rolls = frames.replace(/\s/g, '');
    const tenthFrameRollCount = frames.split(' ').slice(9).join().length;
    const stopGivingExtraPointsIndex = rolls.length - tenthFrameRollCount - 1;
    const extras = Array(rolls.length).fill(0);
    const points = [];

    for (let x = 0; x < rolls.length; x++) {
        const roll = rolls[x];
        if (roll === 'X') {
            points.push(10);

            if (x > stopGivingExtraPointsIndex) continue;
            extras[x + 1]++;
            extras[x + 2]++;
        } else if (roll === '/') {
            points.push(10 - points[points.length - 1]);

            if (x > stopGivingExtraPointsIndex) continue;
            extras[x + 1]++;
        } else {
            points.push(Number(roll));
        }
    }

    return points.reduce((totalScore, score, index) => {
        return totalScore + score + extras[index] * score;
    }, 0)
}

trySolution(bowlingScore, testData);

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
