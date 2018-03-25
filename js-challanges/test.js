function recursive(val1, val2, limit) {
  if (limit <= 0) {
    return;
  } else {
    console.log(val1);
    return recursive(val2, val1 + val2, --limit);
  }
}

recursive(0, 1, 10);



// function fibo(toNumber) {
//   let sequence = [0, 1];
//   for (let x = 0; x < toNumber; x++) {
//     sequence.push(sequence[x] + sequence[x + 1]);
//   }
//   return sequence;
// }
//
// console.log(fibo(10));



// function recursive(val1, val2, limit) {
//   if (limit <= 0) {
//     return;
//   } else {
//     console.log(val1 + val2);
//     limit--;
//     return recursive(val2, val1 + val2, limit)
//   }
// }
//
//
// recursive(0, 1, 5);


// function recursive(currentIdx, arr, limit) {
//   if (currentIdx === limit) {
//     return arr;
//   } else {
//     arr.push(arr[currentIdx] + arr[currentIdx + 1]);
//     currentIdx++;
//     return recursive(currentIdx, arr)
//   }
// }
//
//
// console.log(recursive(0, [0, 1], 10));
//
//
// // [1] - 0
// // [2] - 1
// // [3] - 1
// // [4] - 2
// // [5] - 3
// // [6] - 5
//
// // function recursive(limit, arr) {
// //   if (limit === 10) {
// //     return arr;
// //   } else {
// //     arr.push(arr[limit] + arr[limit+1]);
// //     limit++;
// //     return recursive(limit, arr)
// //   }
// // }
// //
// //
// // console.log(recursive(0, [0, 1]));
//
//
//
// // function recursive() {
// //
// //   return
// // }
// //
// // function fibo(toNumber) {
// //   let sequence = [0, 1];
// //   for (let x = 0; x < toNumber; x++) {
// //     sequence.push(sequence[x] + sequence[x + 1]);
// //   }
// //   return sequence;
// // }
// //
// // console.log(fibo(10)); function recursive() {
// //
// //   return
// // }
// //
