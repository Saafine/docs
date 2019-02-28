/**
 * Doesnt work on x = 5
 */


function jumper(src, startIdx, jumps) {
  const jumpsReduced = jumps % src.length;
  const desiredIndex = startIdx + jumpsReduced;
  const idx = desiredIndex >= 0 ? desiredIndex : src.length + desiredIndex;

  return src[idx];
}

const test = ['a', 'b', 'c', 'd'];

for (let x = 0; x < 20; x++) {
console.log(jumper(test, 5, -x));
}

