const meta = {
  link: 'https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript',
  name: 'Is my friend cheating?',
  tags: []
};

export const testData = [
  {
    args: [26],
    output: [[15, 21], [21, 15]]
  },
  {
    args: [100],
    output: [[]]
  }
];


export function solution(n) { // where n > 0
  let sum = 0;
  for (let x = 0; x <= n; x++) {
      sum+=x;
      console.log(x);
  }
  console.log(sum);
  console.log(sum - 15 - 21);
  console.log(15 * 21);
}

trySolution(solution, testData, 0);

export function trySolution(solutionFn, cases, specifyIdx) {
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
