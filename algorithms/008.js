/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b, result = [], carryon = 0) {
  const aLastNum = Number(a.slice(-1));
  const bLastNum = Number(b.slice(-1));

  const addParts = aLastNum + bLastNum + carryon;

  let _carryon = carryon;
  if (addParts < 2) {
    result.unshift(String(addParts));
    _carryon = 0;
  } else if (addParts === 2) {
    result.unshift('0');
    _carryon = 1;
  } else {
    result.unshift('1');
    _carryon = 1;
  }

  const aPart = a.slice(0, -1);
  const bPart = b.slice(0, -1);

  if (!aPart && !bPart && !_carryon) {
    return result.join('');
  } else {
    return addBinary(aPart, bPart, result, _carryon);
  }
};

console.log(addBinary('1010', '1011'));


// var v = '123456';
// // console.log(v.slice(0, -1));
// console.log(v.slice(-1));
