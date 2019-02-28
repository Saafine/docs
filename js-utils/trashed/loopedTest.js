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
    // const jumpReduced = jump % sourceLength;
    // jumpReduced;
    // const jumpsFromSourceLengthToDesiredIndexReduced = sourceLength + jumpReduced;
    // idx = jumpsFromSourceLengthToDesiredIndexReduced;
    // return source[idx];
  // } else {
  //   return source[jumpsFromSourceLengthToDesiredIndex];
  // }

  //
  // /**
  //  * TOOD: allow negative numbers, group into 3 functions,
  //  * this is unreadable and function can
  //  * be executed in multiple ways (simple, jumping forwards, backwards, multiple jumps)
  //  */
}

const src = ['a', 'b', 'c'];
const result = jumpIndex(src, 0, 1);
result;

const resultNegative = jumpIndexNegative(src, 0, -4);
resultNegative;