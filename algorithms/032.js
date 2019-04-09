const meta = {
  link: 'https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript',
  name: 'Smallest possible sum',
  tags: []
};

const testData = [
  {
    args: [[6, 9, 21]],
    output: 9
  },
  {
    args: [[1, 21, 55]],
    output: 3
  },
  {
    args: [[3, 13, 23, 7, 83]],
    output: 5
  },
  {
    args: [[4, 16, 24]],
    output: 12
  },
  {
    args: [[30, 12]],
    output: 12
  },
  {
    args: [[60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48]],
    output: 132
  },
  {
    args: [[71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]],
    output: 923
  },
  {
    args: [[9]],
    output: 9
  },
];


function solution(nums) {
  if (nums.length === 1) return nums[0];

  const sorted = nums.sort((a, b) => b - a);
  const lastIdx = sorted.length - 1;
  const reduced = reduceWithNext(sorted, 0, lastIdx);

  return reduced ? reduced.reduce((acc, val) => acc + val, 0) : nums.length;
}

function reduceWithNext(reducedSortedNums, idx, lastIdx) {
  let current;
  let next;
  let isNumBiggerThanNext;
  let isLastPair;
  let tryNext;
  let reducedValue;

  while (true) {
    current = reducedSortedNums[idx];
    next = reducedSortedNums[idx + 1];
    if (next === 1) return undefined;

    isNumBiggerThanNext = current > next;
    isLastPair = lastIdx - 1 === idx;
    tryNext = false;

    if (isLastPair && !isNumBiggerThanNext) {
      return reducedSortedNums;
    } else if (!isNumBiggerThanNext) {
      idx = idx + 1;
      tryNext = true;
    }

    if (!tryNext) {
      reducedSortedNums[idx] = reducedValue = current - next;
      geniusSort(reducedSortedNums, reducedValue, idx, lastIdx);
      idx = 0;
    }
  }
}


function geniusSort(unsortedArr, reducedValue, reducedIdx, lastIdx) {
  unsortedArr.splice(reducedIdx, 1);
  for (let x = reducedIdx; x < lastIdx; x++) {
      if (reducedValue > unsortedArr[x]) {
        unsortedArr.splice(x, 0, reducedValue);
        return;
      }
  }
  unsortedArr.push(reducedValue);
}

// solution();

trySolution(solution, testData);

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

/*
 Abandoned recursive version
 */
/*
 function reduceWithNext(reducedSortedNums, idx, lastIdx) {
 const current = reducedSortedNums[idx];
 const next = reducedSortedNums[idx + 1];
 const isNumBiggerThanNext = current > next;
 const isLastPair = lastIdx - 1 === idx;

 if (isLastPair && !isNumBiggerThanNext) {
 return reducedSortedNums;
 } else if (!isNumBiggerThanNext) {
 return reduceWithNext(reducedSortedNums, idx + 1, lastIdx);
 }

 reducedSortedNums[idx] = current - next;
 reducedSortedNums.sort((a, b) => b - a);
 // !todo [lbs] optimize
 // !todo [lbs] optimize for 1's
 return reduceWithNext(reducedSortedNums, 0, lastIdx)
 }
 */
