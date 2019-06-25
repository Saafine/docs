/**
 * Example 1
 */
const add = a => b => a + b;
const inc = add(1);
console.log(inc); // // b => a + b

const a = inc(1); // its actually add(1)(1);
console.log(a); // 2

/**
 * Example 2
 */
const map = f => arr => arr.map(f);
const f = n => n * 2;
const doubleAll = map(f); // arr => arr.map(f)
const doubled = doubleAll([1, 2, 3]); // => [2, 4, 6]

console.log(doubleAll);

/**
 * Example 3
 */
const dragons = [
  {name: "fluffykins", element: "lighting"},
  {name: "noomi", element: "lighting"},
  {name: "karo", element: "fire"},
  {name: "doomer", element: "timewarp"}
];

// EXAMPLE WITHOUT CURRYING
// =============================================

// hasElement VERSION 1
// -------------------
//let hasElement = (element, obj) => obj.element === element; // you can ommit return keyword and curly braces in this case

// hasElement VERSION 2
// -------------------
let hasElement = (element, obj) => {
  return obj.element === element;
};

let lightingDragons = dragons.filter(x => hasElement('lighting', x));


// EXAMPLE WITH CURRYING
// =============================================

// hasElementCurried VERSION 1
// -------------------
const hasElementCurried = function (element) {
  return function (object) {
    return object.element === element;
  }
}

// hasElementCurried VERSION 2
// -------------------
// const hasElementCurried = (element) => (object) => {
//   return object.element === element;
// };

const lightingDragonsCurried = dragons.filter(hasElementCurried('lighting'));
console.log(lightingDragonsCurried);