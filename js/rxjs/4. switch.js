// cancels previous observable (useful for canceling http requests subscribtions)
// switches values (in this example, it listentes to value from button click event, but
// switches it to return interval value

// without switchmap method, it would produce new intervals on every click

const button = document.querySelecton('button');

const obs1 = Rx.Observable.fromEvent(button, 'click');
const obs2 = Rx.Obsesrvable.interval(1000);

obs1.switchMap(
  event => obs2
).subscribe(value => console.log(value)