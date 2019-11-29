const meta = {
  link: '',
  name: '',
  tags: []
};

/*
 {
 args: [[0, 1, 0, 2, 1, 0, 1, 1, 3, 2, 1, 2, 1]],
 output: 6
 },
 {
 args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
 output: 6
 }
 */

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

const TEST_ID = 6;

function solution(terrain) {
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;
  let waterValueCallbacks = [];
  let memMaxRightValues;
  let memMaxRightValueStartIndex = null;

  const calculateMaxRightValues = (arr) => {
    return arr.reduceRight((acc, el) => {
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
      return acc + cur(right);
    }, 0);
    waterValueCallbacks = [];
    rightMax = 0;
  };

  for (let x = 0; x < terrain.length; x++) {
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
}

trySolution(solution, testData);

function trySolution(solutionFn, cases, specifyIdx) {
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
