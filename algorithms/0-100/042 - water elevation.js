const meta = {
  link: 'https://leetcode.com/problems/trapping-rain-water/',
  name: 'Trapping Rain Water',
  tags: ['performance', 'poor performance on unshift due to need of creating new array']
};

const testData = [
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
    output: 6
  },
  {
    args: [[1, 0, 1]],
    output: 1
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1]],
    output: 2
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1]],
    output: 5
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 3]],
    output: 5
  },
  {
    args: [[3, 2, 1, 2, 1]],
    output: 1
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 1, 3, 2, 1, 2, 1]],
    output: 7
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
    output: 6
  }
];
let performance = {};

(function() {
  var nowOffset = Date.now();
  performance.now = function now() {
    return Date.now() - nowOffset;
  };
})();

function random() {
  return Math.floor(Math.random() * 1000) + 1;
}

let jumps = 0;
var solutionSlow = function(terrain) {
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;
  let waterValueCallbacks = [];
  let memMaxRightValues;
  let memMaxRightValueStartIndex = null;

  const calculateMaxRightValues = (arr) => {
    return arr.reduceRight((acc, el) => {
      jumps++;
      const max = acc.max || el;
      return {
        max: el > max ? el : max,
        result: [max, ...acc.result]
      };
    }, {
      max: null,
      result: []
    }).result;
  };

  const getMaxRightValueForIndex = (index) => {
    if (memMaxRightValues) return memMaxRightValues[index - memMaxRightValueStartIndex];
    memMaxRightValueStartIndex = index;
    memMaxRightValues = calculateMaxRightValues(terrain.slice(index));
    return memMaxRightValues[0];
  };

  const waterGetter = (startPoint, elevation, elevationIndex) => (rightMax) => {
    const endPoint = rightMax ? rightMax : getMaxRightValueForIndex(elevationIndex);
    const result = Math.min(startPoint, endPoint) - elevation;
    return result > 0 ? result : 0;
  };

  const calculateAllWater = (right) => {
    water = water + waterValueCallbacks.reduce((acc, cur) => {
      jumps++;
      return acc + cur(right);
    }, 0);
    waterValueCallbacks = [];
    rightMax = 0;
  };

  for (let x = 0; x < terrain.length; x++) {
    jumps++;
    const elevation = terrain[x];

    if (x === terrain.length - 1) {
      calculateAllWater();
      continue;
    }

    if (elevation >= leftMax) {
      rightMax = rightMax > elevation ? rightMax : elevation;
      calculateAllWater(rightMax);
      leftMax = elevation;
    } else {
      waterValueCallbacks.push(waterGetter(leftMax, elevation, x));
      rightMax = elevation > rightMax ? elevation : rightMax;
    }
  }

  return water;

};

function solution(terrain) {
  const reduceRightFn = (acc, el) => {
    jumps++;
    const max = acc.max || el;
    acc.max = el > max ? el : max;
    acc.result.push(max); // could you unshift and not reverse later, but this impacts performance
    return acc;
  };
  const calculateMaxRightValues = (arr) => {
    const x = performance.now();
    const result = arr.reduceRight(reduceRightFn, { result: [], max: null }).result.reverse();
    const y = performance.now();
    console.log(y - x);
    return result;
  };
  const maxRightValues = calculateMaxRightValues(terrain);

  const calculateWater = (left, right, elevation) => {
    const result = Math.min(left, right) - elevation;
    return result > 0 ? result : 0;
  };

  let maxLeftValue = null;
  return terrain.reduce((water, elevation, index) => {
    jumps++;
    const leftValue = maxLeftValue || elevation;
    maxLeftValue = elevation > leftValue ? elevation : leftValue;
    return water + calculateWater(leftValue, maxRightValues[index], elevation);
  }, 0);
}

var arr = Array(10000).fill(null).map(random);
const startSlow = performance.now();
solutionSlow(arr);
const stopSlow = performance.now();
console.log(stopSlow - startSlow);
console.log(jumps);
jumps = 0;

const startFast = performance.now();
solution(arr);
const stopFast = performance.now();
console.log(stopFast - startFast);
console.log(jumps);
jumps = 0;
