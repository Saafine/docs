// use mergemap on observable to chain it's values with another observable

const span = document.querySelector('span');
const obs1 = Rx.Observable.fromEvent(input1, 'input');
const obs2 = Rx.Observable.fromEvent(input2, 'input');

obs1.mergeMap(
  (result1) => {
    return obs2.map(
      result2 => result1.target.value + ' ' + result2.target.value
    )
  }
).subscribe(
  combinedResult => span.textContent = combinedResult
);