//emit value in 1s
const source = Rx.Observable.timer(1000);
//log side effect, emit result
const example = source
  .do(() => console.log('***SIDE EFFECT***'))
  .mapTo('***RESULT***')
  .share();

/*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output: 
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/
const subscribeThree = example.subscribe(val => console.log(val));
const subscribeFour = example.subscribe(val => console.log(val));