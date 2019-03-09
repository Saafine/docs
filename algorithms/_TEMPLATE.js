// !todo [lbs] DO NOT EDIT

const meta = {
  link: '',
  name: '',
  tags: []
};

export const testData = [
  {
    args: [],
    output: undefined
  }
];


export function solution(str) {
}

trySolution(solution, testData);

export function trySolution(solutionFn, cases, specifyIdx) {
  let casesLen = cases.length;
  let startIdx = specifyIdx || 0;
  if(typeof specifyIdx !== 'undefined') {
    casesLen =  startIdx + 1;
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
