function jumper(src, startIdx, jumps) {
  const desiredIndex = startIdx + jumps;
  const jumpsFromZero = startIdx + jumps;
  const idx = desiredIndex >= 0 ? jumpsFromZero % src.length : jumpsFromZero;

  return src[idx];
}

// const test = ['a', 'b'];
const test = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(jumper(test, 0, -1));

// for (let x = 0; x < 20; x++) {
//   console.log(jumper(test, 4, x));
// }

