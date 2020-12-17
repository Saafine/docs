const meta = {
  link: 'https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript',
  name: 'Find the unknown digit',
  tags: []
};

const testData = [
  {
    args: ['1+1=?'],
    output: 2
  },
  {
    args: ['123*45?=5?088'],
    output: 6
  },
  {
    args: ['-5?*-1=5?'],
    output: 0
  },
  {
    args: ['19--45=5?'],
    output: -1
  },
  {
    args: ['??*??=302?'],
    output: 5
  },
  {
    args: ['?*11=??'],
    output: 2
  },
  {
    args: ['??*1=??'],
    output: 2
  },
  {
    args: ['??+??=??'],
    output: -1
  },
];

function solution(str) {
  str;
  const patternForValueA = /.?([0-9?]+)(?=(\-)|(\+)|(\*)|(\/))/;
  const abc = str.match(patternForValueA);
  abc;
  const a = str.split('=');
  const left = a[0];
  const result = a[1];
  left;
  const leftValue = left.match(patternForValueA);
  leftValue
  console.log(a);
  // str.match(//)
}

trySolution(solution, testData, 0);

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
