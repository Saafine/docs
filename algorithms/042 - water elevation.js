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
    output: 6
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
    output: 6
  }
];

const TEST_ID = 6;

function solution(terrain) {
  console.log([0, 1, 0, 2, 1, 0, 1, 1, 3, 2, 1, 2, 1]);
  let potentialFns = [];
  const getWaterGetter = (leftMax, elevation, elevIndx) => (_rightMax) => {
    const rightMax = _rightMax ? _rightMax : Math.max(...terrain.slice(elevIndx + 1));
    const result = Math.min(leftMax, rightMax) - elevation;
    // if (elevIndx === 11) {
    //   console.log({ leftMax, elevation, rightMax, result, elevIndx, _rightMax, water });
    // }
    return result > 0 ? result : 0;
  };

  const calculateAllWater = (right) => {
    return potentialFns.reduce((acc, cur) => {
      return acc + cur(right);
    }, 0);
  };

  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  for (let x = 0; x < terrain.length; x++) {
    const elevation = terrain[x];

    if (x === terrain.length - 1) {
      water = water + calculateAllWater(undefined);
      continue;
    }

    if (elevation >= leftMax) {
      rightMax = rightMax > elevation ? rightMax : elevation;
      water = water + calculateAllWater(rightMax);

      // reset
      potentialFns = [];
      leftMax = elevation;
      rightMax = 0;

    } else {
      potentialFns.push(getWaterGetter(leftMax, elevation, x));
      rightMax = elevation > rightMax ? elevation : rightMax;
    }
  }

  return water;
}

trySolution(solution, testData, TEST_ID);

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
