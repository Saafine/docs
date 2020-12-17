const meta = {
  link: 'https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript',
  name: 'Is my friend cheating?',
  tags: ['Arithmetic progression']
};

export const testData = [
  {
    args: [26],
    output: [[15, 21], [21, 15]]
  },
  {
    args: [100],
    output: [[]]
  },
  {
    args: [1000003],
    output: [[]]
  }
];

function getSequenceSum(b, a = 0) {
  return (a + b) * (b - a + 1) / 2;
}

function removeNb(n) { // where n > 0
  const sequenceSum = getSequenceSum(n);
  const pairs = [];

  let startY;
  let tempSum;
  let tempMultiply;
  for (let x = n; x > 0; x--) {
    debugger;
    console.log(x);
    startY = Math.ceil((sequenceSum - x) / n); // maybe floor ?
    for (let y = startY; y <= x; y++) {
      tempSum = sequenceSum - x - y;
      tempMultiply = x * y;
      if (tempMultiply === tempSum) {
        pairs.push([x, y]);
      }

      if (tempMultiply > sequenceSum) { // !todo [lbs] maybe break for sequenceSum - x - y
        break;
      }
    }
  }

  pairs.forEach(pair => pairs.unshift([pair[1], pair[0]]));

  return pairs;
}

console.log(removeNb(1000003));

export function tryremoveNb(removeNbFn, cases, specifyIdx) {
  let casesLen = cases.length;
  let startIdx = specifyIdx || 0;
  if (typeof specifyIdx !== 'undefined') {
    casesLen = startIdx + 1;
  }

  for (let x = startIdx; x < casesLen; x++) {
    const args = cases[x].args;
    const expectedOutput = cases[x].output;
    const testOutput = removeNbFn(...args);
    const result = testOutput === expectedOutput;
    if (!result) {
      console.error(`[${ x }] FAIL | Expected: ${ expectedOutput } | Got: ${ testOutput }`);
    } else {
      console.log(`[${ x }] Success`);
    }
  }
}
