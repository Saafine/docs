/**
 * 3 methods of creating a empty object
 */
var newObject = {};
// or
var newObject = Object.create(Object.prototype);
// or
var newObject = new Object();

// ----------------------------------------------------

/**
 * 4 methods of assigning keys and values to an object
 */
// 1. Dot syntax

// Set properties
newObject.someKey = 'Hello World';

// Get properties
var value = newObject.someKey;


// 2. Square bracket syntax

// Set properties
newObject['someKey'] = 'Hello World';

// Get properties
var value = newObject['someKey'];


// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/

// 3. Object.defineProperty

// Set properties
Object.defineProperty(newObject, 'someKey', {
  value: 'for more control of the property\'s behavior',
  writable: true,
  enumerable: true,
  configurable: true
});

// If the above feels a little difficult to read, a short-hand could
// be written as follows:

var defineProp = function(obj, key, value) {
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
};

// To use, we then create a new empty "person" object
var person = Object.create(Object.prototype);

// Populate the object with properties
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}


// 4. Object.defineProperties

// Set properties
Object.defineProperties(newObject, {

  'someKey': {
    value: 'Hello World',
    writable: true
  },

  'anotherKey': {
    value: 'Foo bar',
    writable: false
  }

});

// Getting properties for 3. and 4. can be done using any of the
// options in 1. and 2.

/**
 * The methods from above can be used for inheritance
 */
  // Usage:
  // Create a race car driver that inherits from the person object
var driver = Object.create( person );

// Set some properties for the driver
defineProp(driver, "topSpeed", "100mph");

// Get an inherited property (1981)
console.log( driver.dateOfBirth );

// Get the property we set (100mph)

// ----------------------------------------------------

/**
 * Basic constructors
 */
function Car( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );

/**
 * Constructors With Prototypes
 */
function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}


// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object.
// A single instance of toString() will now be shared between all of the Car objects.
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );