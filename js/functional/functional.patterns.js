// Remove specified index from array, similiar to Array.splice
keywords: [
  ...state.keywords.slice(0, action.payload),
  ...state.keywords.slice(action.payload + 1)
]

const array = [1, 2, 3, 4, 5];

// Return the first item in an array.
const head = ([x]) => x;
head(array); // 1

// Return all but the first item in an array.
const tail = ([, ...xs]) => xs; // OR const tail = ([x, ...xs]) => xs
tail(array); // [2,3,4,5]

// Returns a copy of an array without using Array.slice(). Makes use of spread.
const copy = array => [...array];
let copied = copy(array);
copied.push(6);

array; // [1,2,3,4,5]
copied; // [1,2,3,4,5,6]

// Returns a new array that contains the first n items of the given array.
const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : [];
first(array, 3); // [1,2,3]

// Returns a new array that contains the last n items of the given array.
const last = (xs, n = 1) => reverse(first(reverse(xs), n));
const array = [1, 2, 3, 4, 5];
last(array, 3); // [3,4,5]

// Returns a new array with value inserted at given index.
const slice = ([x, ...xs], i, y, curr = 0) => def(x)
  ? curr === i
    ? [y, x, ...slice(xs, i, y, curr + 1)]
    : [x, ...slice(xs, i, y, curr + 1)]
  : [];

slice(array, 2, 3); // [1,2,3,4,5]

// Combines nested arrays into a single array.
const flatten = ([x, ...xs]) => def(x)
  ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
  : [];
const array1 = [1, 2, 3];
const array2 = [4, [5, [6]]];
flatten([array1, array2]); // [1,2,3,4,5,6]

// Return a new array with 2 items swapped based on their index.
const swap = (a, i, j) => (
  map(a, (x, y) => {
    if (y === i) return a[j];
    if (y === j) return a[i];
    return x;
  })
);
swap(array, 0, 4); // [5,2,3,4,1]

// Creates a new array with the results of calling a provided function on every element in this array
const map = ([x, ...xs], fn) => def(x) ? [fn(x), ...map(xs, fn)] : [];
const double = x => x * 2;
map([1, 2, 3], double); // [2,4,6]

// Creates a new array with all elements that pass the test implemented by the provided function
const filter = ([x, ...xs], fn) => def(x)
  ? fn(x)
    ? [x, ...filter(xs, fn)] : [...filter(xs, fn)]
  : [];
const even = x => x % 2 === 0;
const odd = x = !even(x);
const array = [1, 2, 3, 4, 5];

filter(array, even); // [2,4]
filter(array, odd); // [1,3,5]

// The opposite of filter, returns an array that does not pass the filter function.
const reject = ([x, ...xs], fn) => {
  if (undef(x)) return [];
  if (!fn(x)) {
    return [x, ...reject(xs, fn)];
  } else {
    return [...reject(xs, fn)];
  }
};

const even = x => x % 2 === 0;
const array = [1, 2, 3, 4, 5];

reject(array, even); // [1,3,5]

// Splits an array into two arrays. One whose items pass a filter function and one whose items fail.
const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)];
const even = x => x % 2 === 0;
const array = [0, 1, 2, 3, 4, 5];

partition(array, even); // [[0,2,4], [1,3,5]]

// Return the smallest number in an array. Returns Infinity if array supplied is empty.
const min = ([x, ...xs], result = Infinity) => def(x)
  ? x < result
    ? min(xs, x)
    : result
  : result;
const array = [0, 1, 2, 3, 4, 5];

min(array); // 0

// Return the largest number in an array. Returns -Infinity if array supplied is empty.
const max = ([x, ...xs], result = -Infinity) => def(x)
  ? x > result
    ? max(xs, x)
    : result
  : result;
const array = [0, 1, 2, 3, 4, 5];

max(array); // 5

// ----------------------------------------------------
// Return if argument supplied is defined.
const def = x => typeof x !== 'undefined';
const defined = 'this is defined';
def(defined); // true
def(doesntExist); // false

// Return if argument supplied is undefined.
const undef = x => !def(x);
const defined = 'this is defined';
undef(defined); // false
undef(doesntExist); // true
// ----------------------------------------------------

