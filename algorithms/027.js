// !todo [lbs]
// function multiply(a, b) {
//   const bigNumber = 2830869077153280552556547081187254342445169156730;
//   if (bigNumber <= Number.MAX_SAFE_INTEGER) {
//     return bigNumber;
//   }
//   return explodeNumber(bigNumber).map(x => x.toString()).join('');
// }
//
// function explodeNumber(number, result = []) {
//   if (number < 1) return result;
//   result.unshift(number % 10);
//   return explodeNumber(Math.floor(number / 10), result)
// }

// function multiply2(a, b) {
//   if ((a | 0) == 0 || (b | 0) == 0) {
//     return '0';
//   }
//
//   a = a.split('').reverse();
//   b = b.split('').reverse();
//   var result = [];
//
//   for (var i = 0; a[i] >= 0; i++) {
//     for (var j = 0; b[j] >= 0; j++) {
//       if (!result[i + j]) {
//         result[i + j] = 0;
//       }
//
//       result[i + j] += a[i] * b[j];
//     }
//   }
//
//   for (var i = 0; result[i] >= 0; i++) {
//     if (result[i] >= 10) {
//       if (!result[i + 1]) {
//         result[i + 1] = 0;
//       }
//
//       result[i + 1] += parseInt(result[i] / 10);
//       result[i] %= 10;
//     }
//   }
//
//   return result.reverse().join('');
// }
