const meta = {
  link: '',
  name: '',
  tags: []
};

const testData = [
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 1, 3, 2, 1, 2, 1]],
    output: 6
  },
  {
    args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
    output: 6
  }
];

function countWater(arr) {
  const max = Math.min(arr[0], arr[arr.length - 1]);
  return arr.slice(1, -1).reduce((acc, cur) => {
    return acc + max - cur;
  }, 0);
}

function solution(terrain) {
  const waterTanks = [];
  let temp = [];
  for (let x = 0; x < terrain.length; x++) {
    const elevation = terrain[x];

    // tank begins
    if (temp.length === 0) {
      if (elevation === 0) continue;
      temp.push(elevation);
      continue;
    }

    // no mid and next elevation too big
    if (temp.length === 1 && elevation > temp[0]) {
      temp = [];
      continue;
    }

    temp.push(elevation);

    // handle tank end
    if (elevation >= temp[0]) {
      waterTanks.push(temp);
      x--;
      temp = [];
    }
  }

  console.log(temp);
  console.log(waterTanks);
  return waterTanks.reduce((acc, cur) => {
    return acc + countWater(cur);
  }, 0);
}

trySolution(solution, testData, 1);

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
