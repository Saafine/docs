// import $ from 'jquery';
// import Rx from 'rxjs/Rx';

// "rxjs": "^5.0.0-beta.12"

// Observables from events
// --------------------
// Listening to button click event
const btnId = $('#btn');
const btnStream$ = Rx.Observable.fromEvent(btnId, 'click');

// Listening to input keyup event
// const inputStream$ = Rx.Observable.fromEvent(inputId, 'keyup');

// Listening to document's mouse movements
// const inputStream$ = Rx.Observable.fromEvent(document, 'mousemove');

btnStream$.subscribe(
  (e) => { // change
    console.log(e.target.innerHTML);
  },
  (err) => { // error
    console.log(err);
  },
  () => { // completed
    console.log('Completed');
  }
);
// ----------------------------------------------------

// Observables from arrays
// --------------------
const numbers = [22, 44, 55, 66, 77];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
  (value) => {
    // console.log(value);
    // returns:
    // 22
    // 44
    // 55...
  }
);

const posts = [
  { title: 'post one', body: 'this is body' },
  { title: 'post two', body: 'this is body' },
  { title: 'post three', body: 'this is body' }
];

const posts$ = Rx.Observable.from(posts);
// ----------------------------------------------------

// Observables from promises
// --------------------
const myPromise = new Promise((resolve, reject) => {
  console.log('creating promise');
  setTimeout(() => {
    resolve('hello from promise');
  }, 3000);
});

// myPromise.then((x) => {
//   console.log(x);
// });

const source$ = Rx.Observable.fromPromise(myPromise);
source$.subscribe((x) => {
  console.log(x); // 'hello from promise' after 3s
});
// ----------------------------------------------------

// Map - applies a function to each item thats emitted by the source observable,
// and returns an observable that emits the results of that function
// --------------------
// const source2$ = Rx.Observable.interval(1000).take(10); // run every 1000 ms, until it 10 times. So it fires: 0, 1, 2, ..., 9
const source2$ = Rx.Observable.interval(1000)
  .take(10) // run every second, until it reaches 9
  .map((value) => value * 2 ); // take the value of each result, apply a function and return new value
// .map((value) => value + 1); // can be chained

source2$.subscribe((value) => console.log(value));
// ----------------------------------------------------

// Pluck
// --------------------
const users = [
  {name: 'Will', age: 14},
  {name: 'Chill', age: 34},
  {name: 'Bill', age: 25}
];

const users$ = Rx.Observable.from(users)
  .pluck('age');

users$.subscribe((x) => console.log(x)); // returns 14, 34, 25
// ----------------------------------------------------

// Merge
// --------------------
Rx.Observable.of('Hello') // turns string into observable
  .merge(Rx.Observable.of('Everyone')) //
  .subscribe((x) => console.log(x)); // returns Hello <br/> Everyone

Rx.Observable.interval(2000) // one interval running every 2000mss
  .merge(Rx.Observable.interval(500)) // second interval running every 500 ms
  .take(25)
  .subscribe((x) => console.log(x));

// -------
const source3$ = Rx.Observable.interval(2000)
  .map((value) => {
    return 'merge 1 ' + value;
  });

const source4$ = Rx.Observable.interval(500)
  .map((value) => {
    return 'merge 2 ' + value;
  });

Rx.Observable.merge(source3$, source4$) // one will run 20 times, one will run 5. Both will run at the same time. To run oen after the othe use concat
  .take(25)
  .subscribe((value) => console.log(value));
// ----------------------------------------------------

// Merge map - used to merge observables
// --------------------

// Example 1
// -------
Rx.Observable.of('Hello')
  .subscribe((value) => {
    Rx.Observable.of(value + ' everyone')
      .subscribe((value2) => console.log(value2)) // returns 'Hello everyone'
  });

// Example 2
// -------
Rx.Observable.of('Hello')
  .mergeMap((v) => {
    return Rx.Observable.of(v + ' everyone with merge map')
  })
  .mergeMap((v) => {
    return Rx.Observable.of(v + ' and this')
  })
  .subscribe((x) => console.log(x)); // returns 'Hello everyone with merge map and this'

// ----------------------------------------------------
// Switch map
// --------------------
function getUser (key) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({user: 'adam', age: 22, id: key})
    }, 500)
  })
}

const inputSource$ = Rx.Observable.of('342432423')
  .switchMap((key) => {
    return Rx.Observable.fromPromise(getUser(key)); // makes an observable of ahttp request that resolves into an object with user data
  });

inputSource$.subscribe((data) => {
  console.log('user name is', data.user, 'with id', data.id); // returns 'user name is adam with id 342432423' after 500ms
});

// ----------------------------------------------------