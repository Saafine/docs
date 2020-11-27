const meta = {
  link: 'https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript',
  name: 'Strip Comments',
  tags: []
};

const testData = [
  {
    args: ['apples, pears # and bananas\ngrapes\nbananas!apples', ["#", "!"]],
    output: 'apples, pears \ngrapes\nbananas'
  },
  {
    args: ['apples, plums % and bananas\npears\noranges !applesauce', ["%", "!"]],
    output: 'apples, plums\npears\noranges'
  },
  {
    args: ['Q @b\nu\ne -e f g', ["@", "-"]],
    output: 'Q\nu\ne'
  },
  {
    args: ['a #b\nc\nd $e f g', ["#", "$"]],
    output: 'a\nc\nd'
  }
];

function solution(input, [markA, markB]) {
  return input.replace(new RegExp(`(( +\\${markA}|\\${markB}).*?)(?=(\n|($)))`, 'g'),'').trim()
}

trySolution(solution, testData, 3);


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
