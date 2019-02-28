/**
 * Why use it:
 * when we want to loop through array's elements x number of times
 * loopArrayIndexes(test, 0, 1) -> from 'a' jumps once to 'b'
 * loopArrayIndexes(test, 0, -1) -> from 'a' jumps once to 'e'
 */

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