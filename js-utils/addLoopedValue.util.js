// Example:
// addLoopedValue(4, 1, 6) ------> adds 1 to 4, returns 5
// addLoopedValue(4, 2, 6) ------> adds 2 to 4, returns 6
// addLoopedValue(4, 3, 6) ------> adds 3 to 4, returns 0
// addLoopedValue(4, 4, 6) ------> adds 4 to 4, returns 1
// ~ No negative numbers
// ~ Each array starts with 0
// ~ Increments by 1

function addLoopedValue (initial, add, max) {
  let result = {};

  // assume that array starts with 0
  result.MIN = 0;
  result.ARRAYLENGTH = max + 1; // get total number of elements in the array

  result.sum = initial + add;

  if (initial > max) {
    throw Error('Initial number cannot be bigger than maximum.');
  }

  // result won't jump back to start of the array
  if (initial <= result.sum && result.sum <= max) {
    console.log('we are here');
    return result.sum;
  } else if (result.sum > max) { // result jumps back to start of the array
    console.log('we are here');
    result.initialToMin = (max - initial) + 1;
    result.sumFromMin = add - result.initialToMin;

    if (result.sumFromMin > max) {
      // Remove repeating arrays
      result.sumFromMin = result.sumFromMin % result.ARRAYLENGTH;
    }

    result.final = result.MIN + result.sumFromMin;
    return result.final;
  } else {
    throw Error('No negative numbers.');
  }
}
