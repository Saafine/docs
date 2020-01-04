const meta = {
    link: '',
    name: '',
    tags: ['knapsack', 'binary search']
};

const testData = [
    {
        args: [[1, 1, 1, 2, 2, 3], 6],
        output: '7.0686'
    },
    {
        args: [[4, 3, 3], 3],
        output: '28.2744'
    },
    {
        args: [[5], 5],
        output: '15.7079'
    },
    {
        args: [[6, 7], 12],
        output: '21.9911'
    }
];


function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

function format(value) {
    return value.toFixed(4)
}

function possible(areas, trySegmentArea, segments) {
    let fittedSegments = 0;
    for (let area of areas) {
        fittedSegments += Math.floor(area / trySegmentArea);
        if (fittedSegments >= segments) return true;
    }
    return false;
}

// Simple binary search solution
// Complexity is O(log(A/epsilon) * n),
// n is number of cakes,
// A is the largest area,
// epsilon is the precision tolerance
function maximumAreaServingCake(radii, segments) {
    const areas = radii.sort((a, b) => b - a).map(getCircleArea);
    let min = 0;
    let max = areas[0];
    let result;

    while (min + 10e-5 <= max) {
        result = (min + max) / 2;
        if (possible(areas, result, segments)) {
            min = result;
        } else {
            max = result;
        }
    }

    return format(result);
}
