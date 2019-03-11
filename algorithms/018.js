const meta = {
  link: 'https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript',
  name: 'Title Case',
  tags: ['regexp', 'lower case', 'uppercase', 'dynamic regexp']
};

export const testData = [
  {
    args: ['a clash of KINGS', 'a an the of'],
    output: 'A Clash of Kings'
  },
  {
    args: ['THE WIND IN THE WILLOWS', 'The In'],
    output: 'The Wind in the Willows'
  },
  {
    args: ['the quick brown fox'],
    output: 'The Quick Brown Fox'
  }
];

// !todo [lbs] save dynamic regexp, pattern to match whole parts of strings ^xxxxx$|^yyyy$|
export function solution(str, exceptions = '') {
  const strArr = str.toLowerCase().split(' ');
  const exceptionsSplit = exceptions.split(' ');
  const exceptionsLen = exceptionsSplit.length;

  const pattern = exceptionsSplit.reduce((acc, part, idx) => {
    if (idx === exceptionsLen - 1) return `${ acc }^${ part }$`;
    return `${ acc }^${ part }$|`;
  }, '');
  const regexp = new RegExp(pattern, 'gi');
  console.log(pattern);

  const leftSideRaw = strArr[0];
  const leftSide = leftSideRaw.charAt(0).toUpperCase() + leftSideRaw.slice(1);

  const rightSide = strArr.slice(1).map((word) => {
    if (word.match(regexp)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return [leftSide, ...rightSide].join(' ');
}

trySolution(solution, testData);

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
