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

function getCount(terrain) {
  let edge = 0;
  let fill = 0;
  let sum = 0;
  // , 3, 2, 1, 2, 1
  for (const block of [2, 1, 0, 1]) {
    if (edge === block) {
      sum = sum + fill;
      fill = 0;
      continue;
    }

    if (block < edge) {
      console.log(block, edge);
      fill = fill + edge - block;
      continue;
    }

    if (block > edge) {
      sum = sum + fill;
      fill = 0;
      edge = block;
    }
  }
  console.log(sum, fill);
  return sum;
}

function solution(terrain) {
  return getCount(terrain);
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
