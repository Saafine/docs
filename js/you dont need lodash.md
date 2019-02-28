https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore

# You don't (may not) need Lodash/Underscore [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cht8687/You-Dont-Need-Lodash-Underscore)

Lodash and Underscore are great modern JavaScript utility libraries, and they are widely used by Front-end developers. However, when you are targeting modern browsers, you may find out that there are many methods which are already supported natively thanks to ECMAScript5 [ES5] and ECMAScript2015 [ES6]. If you want your project to require fewer dependencies, and you know your target browser clearly, then you may not need Lodash/Underscore.

You are welcome to contribute with more items provided below.

* If you are targeting legacy JavaScript engine with those ES5 methods, you can use [es5-shim](https://github.com/es-shims/es5-shim)

* Please note that, the examples used below are just showing you the native alternative of performing certain tasks. For some of the functions, Lodash provides you more options than native built-ins. This list is not a 1:1 comparison.

* Please send a PR if you want to add or modify the code. No need to open an issue unless it's something big and you want to discuss.


## Voice of Developers

> [Make use of native JavaScript object and array utilities before going big.](https://twitter.com/codylindley/status/692356631007342593)

> &mdash;<cite>Cody Lindley, Author of [jQuery Cookbook](http://shop.oreilly.com/product/9780596159788.do) and [JavaScript Enlightenment](http://shop.oreilly.com/product/0636920027713.do)</cite>

<!-- -->
> [You probably don't need Lodash. Nice List of JavaScript methods which you can use natively.](https://twitter.com/daniellmb/status/692200768556916740)

> &mdash;<cite>Daniel Lamb, Computer Scientist, Technical Reviewer of [Secrets of the JavaScript Ninja](https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition) and [Functional Programming in JavaScript](https://www.manning.com/books/functional-programming-in-javascript)</cite>

<!-- -->
> [I guess not, but I want it.](https://twitter.com/teropa/status/692280179666898944)

> &mdash;<cite>Tero Parviainen, Author of [build-your-own-angular](http://teropa.info/build-your-own-angular)</cite>

<!-- -->
> [I'll admit, I've been guilty of overusing #lodash. Excellent resource.](https://twitter.com/therebelrobot/status/692907269512642561)

> &mdash;<cite>@therebelrobot, Maker of web things, Facilitator for Node.js/io.js</cite>


## ESLint Plugin

<p align="center">
  <a href="https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore">
    <img src="https://img.shields.io/npm/v/eslint-plugin-you-dont-need-lodash-underscore.svg?style=flat-square"
      alt="NPM Version">
  </a>
  <a href="https://www.npmjs.org/package/eslint-plugin-you-dont-need-lodash-underscore">
    <img src="http://img.shields.io/npm/dm/eslint-plugin-you-dont-need-lodash-underscore.svg?style=flat-square"
      alt="Downloads">
  </a>
  <a href="https://travis-ci.org/you-dont-need/You-Dont-Need-Lodash-Underscore">
    <img src="https://img.shields.io/travis/you-dont-need/You-Dont-Need-Lodash-Underscore/master.svg?style=flat-square"
      alt="Build Status">
  </a>
  <a href="https://coveralls.io/github/you-dont-need/You-Dont-Need-Lodash-Underscore?branch=master">
    <img src="https://img.shields.io/coveralls/you-dont-need/You-Dont-Need-Lodash-Underscore/master.svg?style=flat-square"
      alt="Coverage Status" />
  </a>
  <a href="https://david-dm.org/you-dont-need/You-Dont-Need-Lodash-Underscore">
    <img src="https://img.shields.io/david/you-dont-need/You-Dont-Need-Lodash-Underscore.svg?style=flat-square"
         alt="Dependency Status">
  </a>
</p>

If you're using [ESLint](http://eslint.org/), you can install a
[plugin](http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin) that
will help you identify places in your codebase where you don't (may not) need Lodash/Underscore.

Install the plugin...

```sh
npm install --save-dev eslint-plugin-you-dont-need-lodash-underscore
```

...then update your config

```js
"extends" : ["plugin:you-dont-need-lodash-underscore/compatible"],
```

For more information, see [Configuring the ESLint Plugin](configuring.md)


## Quick Links

**[Array](#array)**

1. [_.chunk](#_chunk)
1. [_.compact](#_compact)
1. [_.concat](#_concat)
1. [_.fill](#_fill)
1. [_.find](#_find)
1. [_.findIndex](#_findindex)
1. [_.first](#_first)
1. [_.flatten](#_flatten)
1. [_.flattenDeep](#_flattendeep)
1. [_.fromPairs](#_frompairs)
1. [_.head and _.tail](#_head-and-_tail)
1. [_.indexOf](#_indexof)
1. [_.join](#_join)
1. [_.last](#_last)
1. [_.lastIndexOf](#_lastindexof)
1. [_.reverse](#_reverse)
1. [_.without](#_without)
1. [_.intersection](#_intersection)
1. [_.difference](#_difference)
1. [_.slice](#_slice)
1. [_.isArray](#_isarray)
1. [_.isArrayBuffer](#_isarraybuffer)

**[Collection*](#collection*)**

*:heavy_exclamation_mark:<b>Important:</b> Note that the native equivalents are array methods,
and will not work with objects. If this functionality is needed,
then Lodash/Underscore is the better option.*

1. [_.each](#_each)
1. [_.every](#_every)
1. [_.filter](#_filter)
1. [_.groupBy](#_groupby)
1. [_.includes](#_includes)
1. [_.map](#_map)
1. [_.minBy and _.maxBy](#_minby-and-_maxby)
1. [_.orderBy](#_sortby-and-_orderby)
1. [_.pluck](#_pluck)
1. [_.range](#_range)
1. [_.reduce](#_reduce)
1. [_.reduceRight](#_reduceright)
1. [_.size](#_size)
1. [_.some](#_some)
1. [_.sortBy](#_sortby-and-_orderby)
1. [_.uniq](#_uniq)

**[Function](#function)**

1. [_.after](#_after)
1. [_.bind](#_bind)
1. [_.partial](#_partial)

**[Lang](#lang)**

1. [_.isNaN](#_isnan)
1. [_.isNil](#_isnil)
1. [_.isNull](#_isnull)
1. [_.isUndefined](#_isundefined)
1. [_.gt](#_gt)
1. [_.gte](#_gte)

**[Object](#object)**

1. [_.assign](#_assign)
1. [_.keys](#_keys)
1. [_.toPairs](#_topairs)
1. [_.values](#_values)
1. [_.get](#_get)
1. [_.omit](#_omit)
1. [_.pick](#_pick)
1. [_.pickBy](#_pickby)

**[String](#string)**

1. [_.repeat](#_repeat)
1. [_.template](#_template)
1. [_.toLower](#_tolower)
1. [_.toUpper](#_toupper)
1. [_.trim](#_trim)
1. [_.replace](#_replace)

**[Util](#string)**

1. [_.times](#_times)

## Array

### _.chunk

Creates an array of elements split into groups the length of size.
```js
// Underscore/Lodash
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


// Native

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  Not Supported |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.compact

Creates an array with all falsy values removed.

  ```js
  // Underscore/Lodash
  _.compact([0, 1, false, 2, '', 3]);

  // Native
  [0, 1, false, 2, '', 3].filter(Boolean)
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
   ✔  |  1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.concat

Creates a new array concatenating array with any additional arrays and/or values.

  ```js
  // Underscore/Lodash
  var array = [1]
  var other = _.concat(array, 2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]

  // Native
  var array = [1]
  var other = array.concat(2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
1.0  ✔  | 1.0 ✔ |  5.5 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.fill

Fills elements of array with value from start up to, but not including, end.
*Note that `fill` is a mutable method in both native and Lodash/Underscore.*

  ```js
  // Underscore/Lodash
  var array = [1, 2, 3]

  _.fill(array, 'a')

  console.log(array)
  // output: ['a', 'a', 'a']

  _.fill(Array(3), 2)
  // output: [2, 2, 2]

  _.fill([4, 6, 8, 10], '*', 1, 3)
  // output: [4, '*', '*', 10]

  // Native
  var array = [1, 2, 3]

  array.fill('a')

  console.log(array)
  // output: ['a', 'a', 'a']

  Array(3).fill(2)
  // output: [2, 2, 2]

  [4, 6, 8, 10].fill('*', 1, 3)
  // output: [4, '*', '*', 10]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  45.0 ✔ | 31.0 ✔ |  Not supported  |  32.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.find

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

  ```js
  // Underscore/Lodash
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  _.find(users, function (o) { return o.age < 40; })
  // output: object for 'barney'

  // Native
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  users.find(function (o) { return o.age < 40; })
  // output: object for 'barney'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  45.0 ✔ | 25.0 ✔ |  Not supported  |  32.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.findIndex

Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

  ```js
  // Underscore/Lodash
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  var index = _.findIndex(users, function (o) { return o.age >= 40; })
  console.log(index)
  // output: 1

  // Native
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]

  var index = users.findIndex(function (o) { return o.age >= 40; })
  console.log(index)
  // output: 1
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  45.0 ✔ | 25.0 ✔ |  Not supported  |  32.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.first

Returns the first element of an array. Passing n will return the first n elements of the array.

  ```js
  // Underscore/Lodash
  _.first([1, 2, 3, 4, 5]);
  // => 1

  _.first([1, 2, 3, 4, 5], 2);
  // => [1, 2]

  // Native
  [1, 2, 3, 4, 5][0];
  // => 1
  //or
  [].concat(1, 2, 3, 4, 5).shift()
  // => 1
  //or
  [].concat([1, 2, 3, 4, 5]).shift()
  // => 1

  // Native (works even with potentially undefined/null, like _.first)
  [].concat(undefined).shift()
  // => undefined

  [1, 2, 3, 4, 5].slice(0, 2);
  // => [1, 2]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.flatten

Flattens array a single level deep.

  ```js
  // Underscore/Lodash
  _.flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]

  // Native
  const flatten = [1, [2, [3, [4]], 5]].reduce( (a, b) => a.concat(b), [])
  // => [1, 2, [3, [4]], 5]

  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  46.0 ✔ | 3.0 ✔ |  9.0 ✔  |  10.5 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.flattenDeep

Recursively flattens array.

  ```js
  // Underscore/Lodash
  _.flattenDeep([1, [2, [3, [4]], 5]]);
  // => [1, 2, 3, 4, 5]

  // Native
  const flattenDeep = (arr) => Array.isArray(arr)
    ? arr.reduce( (a, b) => a.concat(flattenDeep(b)) , [])
    : [arr]

  flattenDeep([1, [[2], [3, [4]], 5]])
  // => [1, 2, 3, 4, 5]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  46.0 ✔ | 16.0 ✔ |  Not supported  |  37.0 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.fromPairs

Returns an object composed from key-value pairs.

  ```js
  // Underscore/Lodash
  _.fromPairs([['a', 1], ['b', 2]]);
  // => { 'a': 1, 'b': 2 }

  // Native
  const fromPairs = function(arr) {
    return arr.reduce(function(accumulator, value) {
      accumulator[value[0]] = value[1];
      return accumulator;
    }, {})
  }

  // Compact form
  const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {})

  fromPairs([['a', 1], ['b', 2]]);
  // => { 'a': 1, 'b': 2 }
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 3.0 ✔ |  9 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.head and _.tail
Gets the first element or all but the first element.

  ```js
  const array = [1, 2, 3]

  // Underscore: _.first, _.head, _.take
  // Lodash: _.first, _.head
  _.head(array)
  // output: 1

  // Underscore: _.rest, _.tail, _.drop
  // Lodash: _.tail
  _.tail(array)
  // output: [2, 3]


  // Native
  const [ head, ...tail ] = array
  console.log(head)
  // output: 1
  console.log(tail)
  // output [2, 3]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  49 ✔  |  34 ✔ |  Not Supported |  37 ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.indexOf

Returns the first index at which a given element can be found in the array, or -1 if it is not present.

  ```js
  // Underscore/Lodash
  var array = [2, 9, 9]
  var result = _.indexOf(array, 2)
  console.log(result)
  // output: 0

  // Native
  var array = [2, 9, 9]
  var result = array.indexOf(2)
  console.log(result)
  // output: 0
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.join
:heavy_exclamation_mark:`Lodash only`
Joins a list of elements in an array with a given separator.

  ```js
  // Lodash
  var result = _.join(['one', 'two', 'three'], '--')
  console.log(result)
  // output: 'one--two--three'

  // Native
  var result = ['one', 'two', 'three'].join('--')
  console.log(result)
  // output: 'one--two--three'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  1.0 ✔ |  5.5 ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.last

Returns the last element of an array. Passing n will return the last n elements of the array.

  ```js
  // Underscore/Lodash
  const numbers = [1, 2, 3, 4, 5];
  _.last(numbers);
  // => 5

  _.last(numbers, 2);
  // => [4, 5]

  // Native
  const numbers = [1, 2, 3, 4, 5];
  numbers[numbers.length - 1];
  // => 5
  //or
  numbers.slice(-1)[0];
  // => 5
  //or
  [].concat(numbers).pop()
  // => 5

  // Native (works even with potentially undefined/null)
  [].concat(undefined).pop()
  // => undefined

  numbers.slice(-2);
  // => [4, 5]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.lastIndexOf

Returns the index of the last occurrence of value in the array, or -1 if value is not present.

  ```js
  // Underscore/Lodash
  var array = [2, 9, 9, 4, 3, 6]
  var result = _.lastIndexOf(array, 9)
  console.log(result)
  // output: 2

  // Native
  var array = [2, 9, 9, 4, 3, 6]
  var result = array.lastIndexOf(9)
  console.log(result)
  // output: 2
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.reverse
:heavy_exclamation_mark:`Lodash only`
Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

  ```js
  // Lodash
  var array = [1, 2, 3]
  console.log(_.reverse(array))
  // output: [3, 2, 1]

  // Native
  var array = [1, 2, 3]
  console.log(array.reverse())
  // output: [3, 2, 1]
  ```

Voice from the Lodash author:

>Lodash's `_.reverse` just calls `Array#reverse` and enables composition like `_.map(arrays, _.reverse).`
It's exposed on _ because previously, like `Underscore`, it was only exposed in the chaining syntax.
>--- [jdalton](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore/commit/22c4bcf2be48dd415d2b073759805562e520b615#)

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  1.0 ✔ |  5.5 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.without
:heavy_exclamation_mark:`Lodash only`
Returns an array where matching items are filtered.

  ```js
  // Lodash
  var array = [1, 2, 3]
  console.log(_.without(array, 2))
  // output: [1, 3]

  // Native
  var array = [1, 2, 3]
  console.log(array.filter(function(value) {
    return value !== 2;
  }));
  // output: [1, 3]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.intersection
Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays.

  ```js
  // Underscore/Lodash
  console.log(_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]))
  // output: [1, 2]

  // Native
  var arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  console.log(array.reduce(function(a, b) {
    return a.filter(function(value) {
      return b.includes(value);
    });
  })));
  // output: [1, 2]

  // ES6
  let arrays = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
  console.log(arrays.reduce((a, b) => a.filter(c => b.includes(c))));
  // output: [1, 2]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.difference
Similar to [without](#_without), but returns the values from array that are not present in the other arrays.

  ```js
  // Underscore/Lodash
  console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]))
  // output: [1, 3, 4]

  // Native
  var arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  console.log(array.reduce(function(a, b) {
    return a.filter(function(value) {
      return !b.includes(value);
    });
  })));
  // output: [1, 3, 4]

  // ES6
  let arrays = [[1, 2, 3, 4, 5], [5, 2, 10]];
  console.log(arrays.reduce((a, b) => a.filter(c => !b.includes(c))));
  // output: [1, 3, 4]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  1.0 ✔  |  1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.slice
Returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included)

  ```js
  // Lodash
  var array = [1, 2, 3, 4]
  console.log(_.slice(array, 1, 3))
  // output: [2, 3]

  // Native
  var array = [1, 2, 3, 4]
  console.log(array.slice(1, 3));
  // output: [2, 3]
  ```

#### Browser Support

 ![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔  |  ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.isArray
Returns true if given value is an array.

  ```js
  // Lodash
  var array = []
  console.log(_.isArray(array))
  // output: true

  // Native
  var array = []
  console.log(Array.isArray(array));
  // output: true
  ```

  #### Browser Support

 ![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: |
  5 ✔  |  4 ✔  |  9 ✔  |  10.5 ✔  | 5 ✔  |

**[⬆ back to top](#quick-links)**

### _.isArrayBuffer

Checks if value is classified as an ArrayBuffer object.

  ```js
  // Lodash
  _.isArrayBuffer(new ArrayBuffer(2));
  // output: true

  // Native
  console.log(new ArrayBuffer(2) instanceof ArrayBuffer);
  // output: true
  ```

  #### Browser Support

 ![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: |
  ✔  |  1 ✔  | ✔  | ✔  | ✔  |

**[⬆ back to top](#quick-links)**

## Collection*

*:heavy_exclamation_mark:<b>Important:</b> Note that the native equivalents are array methods,
and will not work with objects. If this functionality is needed,
then Lodash/Underscore is the better option.*

### _.each

Iterates over a list of elements, yielding each in turn to an iteratee function.

  ```js
  // Underscore/Lodash
  _.each([1, 2, 3], function (value, index) {
    console.log(value)
  })
  // output: 1 2 3

  // Native
  [1, 2, 3].forEach(function (value, index) {
    console.log(value)
  })
  // output: 1 2 3
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.every

Tests whether all elements in the array pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }
  var array = [10, 20, 30]
  var result = _.every(array, isLargerThanTen)
  console.log(result)
  // output: true

  // Native
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }

  var array = [10, 20, 30]
  var result = array.every(isLargerThanTen)
  console.log(result)
  // output: true
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.filter

Creates a new array with all elements that pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isBigEnough (value) {
    return value >= 10
  }
  var array = [12, 5, 8, 130, 44]
  var filtered = _.filter(array, isBigEnough)
  console.log(filtered)
  // output: [12, 130, 44]

  // Native
  function isBigEnough (value) {
    return value >= 10
  }
  var array = [12, 5, 8, 130, 44]
  var filtered = array.filter(isBigEnough)
  console.log(filtered)
  // output: [12, 130, 44]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.groupBy

Group items by key.

  ```js
  // Underscore/Lodash
  var grouped = _.groupBy(['one', 'two', 'three'], 'length')
  console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}

  // Native
  var grouped = ['one', 'two', 'three'].reduce((r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r), {})
  console.log(grouped)
  // output: {3: ["one", "two"], 5: ["three"]}
  ```

  ```js
  // Underscore/Lodash
  var grouped = _.groupBy([1.3, 2.1, 2.4], num => Math.floor(num))
  console.log(grouped)
  // output: {1: [1.3], 2: [2.1, 2.4]}

  // Native
  var grouped = [1.3, 2.1, 2.4].reduce((r, v, i, a, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
  console.log(grouped)
  // output: {1: [1.3], 2: [2.1, 2.4]}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 3.0 ✔ |  9 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.includes

Checks if a value is in collection.

  ```js
  var array = [1, 2, 3]
  // Underscore/Lodash - also called _.contains
  _.includes(array, 1)
  // output: true

  // Native
  var array = [1, 2, 3]
  array.includes(1)
  // output: true

  // Native (does not use same value zero)
  var array = [1, 2, 3]
  array.indexOf(1) > -1
  // output: true
  ```

#### Browser Support for `Array.prototype.includes`

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  47 ✔  | 43 ✔ |  Not supported  |  34 ✔ |  9 ✔ |

#### Browser Support for `Array.prototype.indexOf`

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔ | ✔ | ✔ | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.map

Translates all items in an array or object to new array of items.

  ```js
  // Underscore/Lodash
  var array1 = [1, 2, 3]
  var array2 = _.map(array1, function (value, index) {
    return value * 2
  })
  console.log(array2)
  // output: [2, 4, 6]

  // Native
  var array1 = [1, 2, 3]
  var array2 = array1.map(function (value, index) {
    return value * 2
  })
  console.log(array2)
  // output: [2, 4, 6]
  ```

### _.minBy and _.maxBy

Use Array#reduce for find the maximum or minimum collection item

  ```js
  // Underscore/Lodash
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var minItem = _.minBy(data, 'value')
  var maxItem = _.maxBy(data, 'value')
  console.log(minItem, maxItem)
  // output: { value: 2 } { value: 6 }

  // Native
  var data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  var minItem = data.reduce(function(a, b) { return a.value <= b.value ? a : b }, {})
  var maxItem = data.reduce(function(a, b) { return a.value >= b.value ? a : b }, {})
  console.log(minItem, maxItem)
  // output: { value: 2 }, { value: 6 }
  ```

Extract a functor and use es2015 for better code

  ```js
  // utils
  const makeSelect = (comparator) => (a, b) => comparator(a, b) ? a : b
  const minByValue = makeSelect((a, b) => a.value <= b.value)
  const maxByValue = makeSelect((a, b) => a.value >= b.value)

  // main logic
  const data = [{ value: 6 }, { value: 2 }, { value: 4 }]
  const minItem = data.reduce(minByValue, {})
  const maxItem = data.reduce(maxByValue, {})

  console.log(minItem, maxItem)
  // output: { value: 2 }, { value: 6 }

  // or also more universal and little slower variant of minBy
  const minBy = (collection, key) => {
    // slower because need to create a lambda function for each call...
    const select = (a, b) => a[key] <= b[key] ? a : b
    return collection.reduce(select, {})
  }

  console.log(minBy(data, 'value'))
  // output: { value: 2 }
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 3.0 ✔ |  9 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.pluck

  `array.map` or `_.map` can also be used to replace `_.pluck`. Lodash v4.0 removed `_.pluck` in favor of `_.map` with iteratee shorthand. Details can be found in [Changelog](https://github.com/lodash/lodash/wiki/Changelog)

  ```js
  // Underscore/Lodash
  var array1 = [{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}]
  var names = _.pluck(array1, "name")
  console.log(names)
  // output: ["Alice", "Bob", "Jeremy"]

  // Native
  var array1 = [{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}]
  var names = array1.map(function(x){
    return x.name
  })
  console.log(names)
  // output: ["Alice", "Bob", "Jeremy"]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

### _.reduce

Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

  ```js
  // Underscore/Lodash
  var array = [0, 1, 2, 3, 4]
  var result = _.reduce(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
  })
  console.log(result)
  // output: 10

  // Native
  var array = [0, 1, 2, 3, 4]
  var result = array.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
  })
  console.log(result)
  // output: 10
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 3.0 ✔ |  9 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.range

Creates an array of numbers progressing from start up to.

  ```js
  // Underscore/Lodash
  _.range(4)  // output: [0, 1, 2, 3]
  _.range(-4) // output: [0, -1, -2, -3]
  _.range(1, 5)     // output: [1, 2, 3, 4]
  _.range(0, 20, 5) // output: [0, 5, 10, 15]

  // Native ( solution with Array.from )
  Array.from({length: 4}, (_, i) => i)  // output: [0, 1, 2, 3]
  Array.from({length: 4}, (_, i) => -i) // output: [-0, -1, -2, -3]
  Array.from({length: 4}, (_, i) => i + 1) // output: [1, 2, 3, 4]
  Array.from({length: 4}, (_, i) => i * 5) // output: [0, 5, 10, 15]

  // Native ( solution with keys() and spread )
  [...Array(4).keys()]  // output: [0, 1, 2, 3]
  [...Array(4).keys()].map(k => -k) // output: [-0, -1, -2, -3]
  [...Array(4).keys()].map(k => k + 1)  // output: [1, 2, 3, 4]
  [...Array(4).keys()].map(k => k * 5)  // output: [0, 5, 10, 15]
  ```


#### Browser Support ( Array.from )

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
 45 ✔  | 32 ✔ |  Not supported   |  ✔ |  9.0 ✔ |

#### Browser Support ( keys and array spread )

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
 46 ✔  | 16 ✔ |  Not supported | 37 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.reduceRight

This method is like _.reduce except that it iterates over elements of collection from right to left.

  ```js
  // Underscore/Lodash
  var array = [0, 1, 2, 3, 4]
  var result = _.reduceRight(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue
  })
  console.log(result)
  // output: -2

  // Native
  var array = [0, 1, 2, 3, 4]
  var result = array.reduceRight(function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue
  })
  console.log(result)
  // output: -2
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 3.0 ✔ |  9 ✔  |  10.5 ✔ |  4.0 ✔ |

**[⬆ back to top](#quick-links)**

### _.size

Returns the number of values in the collection.

  ```js
  // Underscore/Lodash
  var result = _.size({one: 1, two: 2, three: 3})
  console.log(result)
  // output: 3

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3}).length
  console.log(result2)
  // output: 3
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  5 ✔  | 4.0 ✔ |  9 ✔ |  12 ✔ |  5 ✔ |

**[⬆ back to top](#quick-links)**

### _.some

Tests whether any of the elements in the array pass the test implemented by the provided function.

  ```js
  // Underscore/Lodash
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }
  var array = [10, 9, 8]
  var result = _.some(array, isLargerThanTen)
  console.log(result)
  // output: true

  // Native
  function isLargerThanTen (element, index, array) {
    return element >= 10
  }

  var array = [10, 9, 8]
  var result = array.some(isLargerThanTen)
  console.log(result)
  // output: true
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  38 ✔  | 13 ✔ |  Not Supported  |  25 ✔  | 9 ✔  |

**[⬆ back to top](#quick-links)**

### _.sortBy and _.orderBy

Sorts an array of object based on an object key provided by a parameter (note this is more limited than Underscore/Lodash).

  ```js
  const fruits = [
    {name:"banana", amount: 2},
    {name:"apple", amount: 4},
    {name:"pineapple", amount: 2},
    {name:"mango", amount: 1}
  ];

  // Underscore
  _.sortBy(fruits, 'name');
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

  // Lodash
  _.orderBy(fruits, ['name'],['asc']);
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]

  // Native
  const sortBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  };

  // The native sort modifies the array in place. `_.orderBy` and `_.sortBy` do not, so we use `.concat()` to
  // copy the array, then sort.
  fruits.concat().sort(sortBy("name"));
  // => [{name:"apple", amount: 4}, {name:"banana", amount: 2}, {name:"mango", amount: 1}, {name:"pineapple", amount: 2}]
  ```

### _.uniq

Produces a duplicate-free version of the array, using === to test object equality.

  ```js
  // Underscore/Lodash
  var array = [1, 2, 1, 4, 1, 3]
  var result = _.uniq(array)
  console.log(result)
  // output: [1, 2, 4, 3]

  // Native
  var array = [1, 2, 1, 4, 1, 3];
  var result = [...new Set(array)];
  console.log(result)
  // output: [1, 2, 4, 3]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1.5 ✔ |  9 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**

## Function

### _.after
:heavy_exclamation_mark:`Note this is an alternative implementation`
Creates a version of the function that will only be run after first being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.

  ```js
  var notes = ['profile', 'settings']
  // Underscore/Lodash
  var renderNotes = _.after(notes.length, render)
  notes.forEach(function (note) {
    console.log(note)
    renderNotes()
  })

  // Native
  notes.forEach(function (note, index) {
    console.log(note)
    if (notes.length === (index + 1)) {
      render()
    }
  })
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  ✔ |  ✔ |  ✔  |

 **[⬆ back to top](#quick-links)**

### _.bind
Create a new function that calls _func_ with _thisArg_ and _args_.

  ```js
  var objA = {
    x: 66,
    offsetX: function(offset) {
      return this.x + offset;
    }
  }

  var objB = {
    x: 67
  };

  // Underscore/Lodash
  var boundOffsetX = _.bind(objA.offsetX, objB, 0);

  // Native
  var boundOffsetX = objA.offsetX.bind(objB, 0);
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  9 ✔ |  ✔ |  ✔  |

 **[⬆ back to top](#quick-links)**

### _.partial
Create a new function that calls _func_ with _args_.

  ```js
  // Lodash
  function greet(greeting, name) {
    return greeting + ' ' + name;
  }
  var sayHelloTo = _.partial(greet, 'hello');

  // Native
  function greet(greeting, name) {
    return greeting + ' ' + name;
  }
  var sayHelloTo = (...args) => greet('hello', ...args)
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  62 ✔  | 56 ✔ |  ✗  |  49 ✔ |  11 ✔ |

**[⬆ back to top](#quick-links)**

## Lang

### _.isNaN

Checks if a value is NaN.

  ```js
  // Underscore/Lodash
  console.log(_.isNaN(NaN))
  // output: true

  // Native
  console.log(isNaN(NaN))
  // output: true

  // ES6
  console.log(Number.isNaN(NaN))
  // output: true
  ```
MDN:
>In comparison to the global `isNaN()` function, `Number.isNaN()` doesn't suffer the problem of forcefully converting the parameter to a number. This means it is now safe to pass values that would normally convert to `NaN`, but aren't actually the same value as `NaN`. This also means that only values of the type number, that are also `NaN`, return true. [Number.isNaN()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)

Voice from the Lodash author:

>Lodash's `_.isNaN` is equiv to ES6 `Number.isNaN` which is different than the global `isNaN`.
>--- [jdalton](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore/commit/b8559a603dccaaa2449b5a68a2d8325cf1fb29cd#)

#### Browser Support for `isNaN`

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  ✔ |  ✔ |  ✔  |

#### Browser Support for `Number.isNaN`

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  25 ✔ | 15 ✔ |  Not supported |  ✔ |  9 ✔ |

**[⬆ back to top](#quick-links)**

### _.isNil
:heavy_exclamation_mark:`Lodash only`
Checks if value is null or undefined.

```js
// Lodash
console.log(_.isNil(null))
// output: true
console.log(_.isNil(NaN))
// output: false

// Native
console.log(null == null);
// output: true
console.log(NaN == null);
// output: false
```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.isNull

Checks if value is null or undefined.

```js
// Underscore/Lodash
console.log(_.isNull(null))
// output: true
console.log(_.isNull(void 0))
// output: false

// Native
console.log(null === null);
// output: true
console.log(void 0 === null);
// output: false
```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.isUndefined

Checks if value is undefined.

```js
// Underscore/Lodash
console.log(_.isUndefined(a))
// output: true

// Native
console.log(typeof a === 'undefined');
// output: true
console.log(a === undefined);
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | 1 ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.gt

Checks if value is greater than other.

```js
// Lodash
console.log(_.gt(3, 1))
// output: true

// Native
console.log(3 > 1);
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

### _.gte

Checks if value is greater than or equal to other.

```js
// Lodash
console.log(_.gte(3, 1))
// output: true

// Native
console.log(3 >= 1);
// output: true
```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

## Object

### _.assign

The method is used to copy the values of all enumerable own properties from one or more source objects to a target object.

  ```js
  // Underscore: _.extendOwn
  // Lodash
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = _.assign(new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'e': 5 }

  // Native
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }
  Foo.prototype.d = 4;
  Bar.prototype.f = 6;
  var result = Object.assign({}, new Foo, new Bar);
  console.log(result);
  // output: { 'c': 3, 'e': 5 }
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  45 ✔  |  34 ✔ |  No support  |  32 ✔ |  9 ✔  |

 **[⬆ back to top](#quick-links)**

### _.keys

Retrieves all the names of the object's own enumerable properties.

  ```js
  // Underscore/Lodash
  var result = _.keys({one: 1, two: 2, three: 3})
  console.log(result)
  // output: ["one", "two", "three"]

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: ["one", "two", "three"]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  5 ✔  | 4.0 ✔ |  9 ✔ |  12 ✔ |  5 ✔ |

**[⬆ back to top](#quick-links)**

### _.toPairs

Retrieves all the given object's own enumerable property `[ key, value ]` pairs.

  ```js
  // Underscore - also called _.pairs
  // Lodash - also called _.entries
  var result = _.toPairs({one: 1, two: 2, three: 3})
  console.log(result)
  // output: [["one", 1], ["two", 2], ["three", 3]]

  // Native
  var result2 = Object.entries({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: [["one", 1], ["two", 2], ["three", 3]]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  38 ✔  | 28 ✔ |  Not supported  |  25 ✔ |  7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.values

Retrieves all the given object's own enumerable property values.

  ```js
  // Underscore/Lodash
  var result = _.values({one: 1, two: 2, three: 3})
  console.log(result)
  // output: [1, 2, 3]

  // Native
  var result2 = Object.values({one: 1, two: 2, three: 3})
  console.log(result2)
  // output: [1, 2, 3]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  54 ✔  | 47 ✔ |  Not supported  |  41.0 ✔ |  10.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.get

Gets the value at path of object.
*Note: If provided path does not exists inside the object js will generate error.*

  ```js
  // Lodash
  var object = { a: [{ b: { c: 3 } }] };
  var result = _.get(object, 'a[0].b.c', 1);
  console.log(result);
  // output: 3

  // Native
  var object = { a: [{ b: { c: 3 } }] };
  var { a: [{ b: { c: result2 = 1 } }] } = object;
  console.log(result2);
  // output: 3
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  49 ✔  | 41 ✔ |  Not supported  |  41.0 ✔ |  8 ✔ |
  
### _.omit

Returns a copy of the object, filtered to omit the keys specified.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.omit(object, ['a', 'c']);
  console.log(result)
  // output: { 'b': '2' }

  // Native
  var { a, c, ...result2 } = object;
  console.log(result2)
  // output: { 'b': '2' }
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  60 ✔  | 55 ✔ |  Not supported  |  37 ✔ | Not Supported |

**[⬆ back to top](#quick-links)**

### _.pick

Creates an object composed of the object properties predicate returns truthy for.

  ```js
  var object = { 'a': 1, 'b': '2', 'c': 3 };

  // Underscore/Lodash
  var result = _.pick(object, ['a', 'c']);
  console.log(result)
  // output: {a: 1, c: 3}

  // Native
  function pick(object, keys) {
    return keys.reduce((obj, key) => {
       if (object[key]) {
          obj[key] = object[key];
       }
       return obj;
     }, {});
  }
  var result = pick(object, ['a', 'c']);
  console.log(result)
  // output: {a: 1, c: 3}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  38 ✔  | 13 ✔ |  12 ✔  |  25 ✔ | 7.1 ✔ |

**[⬆ back to top](#quick-links)**

### _.pickBy

Creates an object composed of the object properties predicate returns truthy for.

  ```js
  var object = { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined };

  // Underscore/Lodash
  var result = _.pickBy(object);
  console.log(result)
  // output: {a: 1, c: 3}

  // Native
  function pickBy(object) {
      const obj = {};
      for (const key in object) {
          if (object[key] !== null && object[key] !== false && object[key] !== undefined) {
              obj[key] = object[key];
          }
      }
      return obj;
  } 
  var result = pickBy(object);
  console.log(result)
  // output: {a: 1, c: 3}
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  | ✔ |  6 ✔  | ✔ | ✔ |

**[⬆ back to top](#quick-links)**

## String

### _.repeat
:heavy_exclamation_mark:`Lodash only`
Repeats the given string n times.

  ```js
  // Lodash
  var result = _.repeat('abc', 2)
  // output: 'abcabc'

  // Native
  var result = 'abc'.repeat(2)
  console.log(result)
  // output: 'abcabc'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  41 ✔  |  24 ✔ |  Not supported  |  28 ✔ |  9 ✔ |

**[⬆ back to top](#quick-links)**

### _.template
:heavy_exclamation_mark: *Note this is an alternative implementation. Native template literals not escape html.*

Create a template function.

  ```js
  // Lodash/Underscore
  const compiled = _.template('hello <%= user %>!');
  compiled({ 'user': 'fred' });

  // Native
  const templateLitreal = (value) => `hello ${value.user}`;
  templateLitreal({ 'user': 'fred' });
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  41 ✔  |  34 ✔ |  Not supported  |  28 ✔ |  9 ✔  |

**[⬆ back to top](#quick-links)**

### _.toLower
:heavy_exclamation_mark:`Lodash only`
Lowercases a given string.

  ```js
  // Lodash
  var result = _.toLower('FOOBAR')
  console.log(result)
  // output: 'foobar'

  // Native
  var result = 'FOOBAR'.toLowerCase()
  console.log(result)
  // output: 'foobar'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.toUpper
:heavy_exclamation_mark:`Lodash only`
Uppercases a given string.

  ```js
  // Lodash
  var result = _.toUpper('foobar')
  console.log(result)
  // output: 'FOOBAR'

  // Native
  var result = 'foobar'.toUpperCase()
  console.log(result)
  // output: 'FOOBAR'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.trim
:heavy_exclamation_mark:`Lodash only`
Removes the leading and trailing whitespace characters from a string.

  ```js
  // Lodash
  var result = _.trim(' abc ')
  console.log(result)
  // output: 'abc'

  // Native
  var result = ' abc '.trim()
  console.log(result)
  // output: 'abc'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  5.0 ✔  |  3.5 ✔ |  9.0 ✔  |  10.5 ✔ |  5.0 ✔  |

**[⬆ back to top](#quick-links)**

### _.replace
returns a new string with some or all matches of a `pattern` replaced by a `replacement`

  ```js
  // Lodash
  var re = /apples/gi;
  var str = 'Apples are round, and apples are juicy.';
  var newstr = _.replace(str, re, 'oranges');
  console.log(newstr);
  // output: 'oranges are round, and oranges are juicy.'

  // Native
  var re = /apples/gi;
  var str = 'Apples are round, and apples are juicy.';
  var result = str.replace(re, 'oranges');
  console.log(result);
  // output: 'oranges are round, and oranges are juicy.'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  ✔  |  ✔ |  ✔  |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

## Reference

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Underscore.js](http://underscorejs.org)
* [Lodash.js](https://lodash.com/docs)

### _.uniq
Removes all duplicates entries from an array.

  ```js
  // Underscore/Lodash
  var result = _.uniq([1, 2, 1, 4, 1, 3]);
  console.log(result)
  // output: [1, 2, 4, 3]

  // Native
  var result = [... new Set([1, 2, 1, 4, 1, 3])]
  console.log(result)
  // output: [1, 2, 4, 3]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  38 ✔  |  13 ✔ |  11 ✔  |  25 ✔ |  7.1 ✔  |

**[⬆ back to top](#quick-links)**

## Util

### _.times
Invokes the iteratee n times, returning an array of the results of each invocation.

  ```js
  // Lodash
  var result = _.times(10)
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'

  // Native
  var result = Array.from({length: 10}, (_,x) => x)
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'
  
  // Native
  var result = [...Array(10).keys()]
  console.log(result)
  // output: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]'
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
  45 ✔  | 32 ✔ |  Not supported  |  ✔ | 9 ✔  |

**[⬆ back to top](#quick-links)**


## Inspired by:

* [You-Dont-Need-jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)
* [Rui's blog](http://ktei.github.io/2016/01/07/some-general-js-tips-1.html)


# License

MIT


[chrome-image]: https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png
[firefox-image]: https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png
[ie-image]: https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png
[opera-image]: https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png
[safari-image]: https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png