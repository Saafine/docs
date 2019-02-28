
function loopArrayIndexes(src, startIdx, jumps) {
  if (jumps >= 0) {
    const jumpsFromZero = startIdx + jumps;
    const idx = jumpsFromZero % src.length;
    return src[idx];
  }

  const lastIdx = src.length - 1;
  const jumpsFromStartIdxToLastIdx = lastIdx - startIdx;
  const jumpsFromLastIdx = jumps  - jumpsFromStartIdxToLastIdx;
  const idx = lastIdx + (jumpsFromLastIdx % src.length);
  return src[idx];
}

const test = ['a', 'b', 'c', 'd', 'e'];

console.log(loopArrayIndexes(test, 0, 1));


function whileLoopArrayIndexes(src, startIdx, jumps) {
  let idx;
  let remainingJumps = jumps;
  let loopIdx = startIdx;
  const maxIdx = src.length - 1;
  if (jumps >=0) {
    while (remainingJumps !== 0) {
      if (loopIdx === maxIdx) {
        loopIdx = 0;
      } else {
        loopIdx++;
      }
      remainingJumps--;
    }
  } else {
    while (remainingJumps !== 0) {
      if (loopIdx === 0) {
        loopIdx = maxIdx;
      } else {
        loopIdx--;
      }
      remainingJumps++;
    }
  }
  return src[loopIdx];
}

function fillArrayWithRandomValues() {
  const arrLength = getRandomInt(1, 1000);
  const testArray = new Array(arrLength);
  for (let x; x < arrLength; x++) {
    testArray[x] = getRandomInt(0, 10000);
  }

  return testArray;
}


function testResults() {
  const test = fillArrayWithRandomValues();
  const randomFrom = getRandomInt(0, test.length - 1);
  const randomJumps = getRandomInt(-50, 500);
  const testFunction1 = loopArrayIndexes(test, randomFrom, randomJumps);
  const testFunction2 = whileLoopArrayIndexes(test, randomFrom, randomJumps);

  if (testFunction1 !== testFunction2) {
    throw new Error('Failure');
  }

  return true;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runTests() {
  for (let x=0; x < 50; x++) {
    const isTestSuccessful = testResults();
  }
  console.log('success');
}

runTests();


/**
 * Archives
 */

/**
 * This will work for negative numbers 2
 */

let result = '';
const from = 4;
for (let x = 0; x < 20; x++) {
  if (x === 0) {
    result += jumper(test, from, -x);
  } else {
    result += ', ' + jumper(test, from, -x);
  }
}
console.log(result);
// ----------------------------------------------------
/**
 * This will work for negative numbers
 */
function jumper(src, startIdx, jumps) {
  const highestIndex = src.length - 1; // 4
  const toHighestIndex = highestIndex - startIdx;
  const jumpsFromHighestIdx = jumps - toHighestIndex;
  const jumpsFromHighestIdxReduced = jumpsFromHighestIdx % src.length;
  const idx = highestIndex + jumpsFromHighestIdxReduced;

  return src[idx];
}

const test = ['a', 'b', 'c', 'd', 'e'];

let result = '';
const from = 4;
for (let x = 0; x < 20; x++) {
  if (x === 0) {
    result += jumper(test, from, -x);
  } else {
    result += ', ' + jumper(test, from, -x);
  }
}

console.log(result);

// ----------------------------------------------------
/**
 * This will work for positive numbers
 */
function jumper(src, startIdx, jumps) {
  const jumpsFromZero = startIdx + jumps;
  const idx = jumpsFromZero % src.length;

  return src[idx];
}

const test = ['a', 'b', 'c', 'd', 'e'];
console.log(jumper(test, 0, 5));
// ----------------------------------------------------
function jumper(src, startIdx, jumps) {
  const desiredIndex = startIdx + jumps;
  const highestIndex = src.length - 1;
  const jumpsFromZero = startIdx + jumps;
  const idx = desiredIndex > highestIndex ? jumpsFromZero % src.length : jumpsFromZero;

  return src[idx];
}

// const test = ['a', 'b'];
const test = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// console.log(jumper(test, 2, 20));


const result = [];
for (let x = 0; x < 20; x++) {
  console.log(jumper(test, 4, x));
}

// ----------------------------------------------------
// ['a', 'b', 'c', 'd', 'e']
// from [2] - 'c' add 5

function jumpIndex(source, startIdx, jump) {
  let idx;
  const sourceLength = source.length;
  const desiredIndex = startIdx + jump;
  const highestIndex = sourceLength - 1;

  const lengthExceeded = (desiredIndex > highestIndex); // length 2, startIdx=0, max jump = 1
  // const isJumpingForward = (0 <= jump);

  if (!lengthExceeded) {
    return source[desiredIndex];
  }

  const jumpsToZero = sourceLength - startIdx; // jumps needed to reset index to 0
  const jumpsFromZeroToDesiredIndex = jump - jumpsToZero;

  if (jumpsFromZeroToDesiredIndex > highestIndex) {
    const jumpsFromZeroToDesiredIndexReduced = jumpsFromZeroToDesiredIndex % sourceLength;
    idx = jumpsFromZeroToDesiredIndexReduced;
  } else {
    idx = jumpsFromZeroToDesiredIndex;
  }

  return source[idx];
}

function jumpIndexNegative(source, startIdx, jump) {
  let idx;
  const desiredIndex = startIdx + jump;
  desiredIndex;
  const arrayOutreached = (0 > desiredIndex);
  arrayOutreached;
  const sourceLength = source.length;
  sourceLength;

  if (!arrayOutreached) {
    return source[desiredIndex];
  }

  const jumpsFromSourceLengthToDesiredIndex = sourceLength + jump;
  jumpsFromSourceLengthToDesiredIndex;

  if (jumpsFromSourceLengthToDesiredIndex < 0) {
    const jumpsToSourceLength = sourceLength - 1 - startIdx;
    jumpsToSourceLength;
    const jumpsReduced = jump + jumpsToSourceLength;
    jumpsReduced;
  }
}
