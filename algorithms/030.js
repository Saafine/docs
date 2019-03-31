const meta = {
  link: 'https://www.codewars.com/kata/5302d655be2a91068b0001fb/train/javascript',
  name: 'Dependency Injection',
  tags: []
};

const testData = [];

// https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
// may not handle all edge cases
function $args(func) {
  return (func + '')
    .replace(/[/][/].*$/mg,'') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
    .replace(/=[^,]+/g, '') // strip any ES6 defaults
    .split(',').filter(Boolean); // split & filter [""]
}

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
const DI = function(dependency) {
  this.dependency = dependency;
};

const deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
};

DI.prototype.inject = function(func) {
  const args = $args(func);
  const resolvedDependencies = args.map((dep) => this.dependency[dep]);
  return () => func.apply(null, resolvedDependencies);
  // func.bind(func, ...arguments);
};

const di = new DI(deps);

const myFunc = di.inject(function (dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

console.log(myFunc());
