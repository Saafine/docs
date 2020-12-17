const meta = {
  link: 'https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript',
  name: 'Next bigger number with the same digits',
  tags: []
};

const testData = [
  {
    args: [12],
    output: 21
  },
  {
    args: [513],
    output: 531
  },
  {
    args: [2017],
    output: 2071
  },
  {
    args: [414],
    output: 441
  },
  {
    args: [144],
    output: 414
  },
  {
    args: [543],
    output: 414
  },
  {
    args: [9],
    output: -1
  },
  {
    args: [531],
    output: -1
  }
];


function nextBigger(n) {
  const aa =  String(n).split('');
  const aSet = new Set(aa);

  // can we swap big on right to left ?

  // 123
  // 132

  // 332

  // 345

  // 355

  // 553

  // 12365
  // 5 with: 6 -> no. with 3? yes
  // 12653

  // 12960
  // 0 with: 6 -> no. with 9? yes -> 12069

  // 12960
  // 0 with 6 ? no. 6 with 9 ? no. 9 with 2? yes -> 19260
  // 16920

  

}

// trySolution(nextBigger, testData, 0);

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
