/**
 * Doesnt work
 */


function jumper(src, startIdx, jumps) {
  let srcCopy = [...src];
  let startIdxCopy = startIdx;

  if (jumps < 0) {
    startIdxCopy = src.length - 1 - startIdx;
    srcCopy.reverse();
    let jumpsCopy = Math.abs(jumps);
    return jumper(srcCopy, startIdxCopy, jumpsCopy)
  }
  const desiredIndex = startIdx + jumps;
  const highestIndex = src.length - 1;
  const jumpsFromZero = startIdx + jumps;
  const idx = desiredIndex > highestIndex ? jumpsFromZero % src.length : jumpsFromZero;

  return src[idx];
}

const test = ['a', 'b', 'c', 'd'];

for (let x = 0; x < 20; x++) {
  console.log(jumper(test, 12, -x));
}

