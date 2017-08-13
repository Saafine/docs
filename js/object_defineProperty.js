// Object.defineProperty
// ---------------------


// Example 1
// ---------------------
// Custom getters and setters
// each time we ask for an object's instance property, getter/setter method gets called. This enables us to make various checks.
// Car() function works exactly like a class
var aCar = {};
aCar.color = 'green';
console.log(aCar.color);

function Car() {
  var theColor;
  Object.defineProperty(this, 'color', {
    get: function() {
      console.log('called get -> color: ' + theColor);
      return theColor;
    },
    set: function(value) {
      var sColor = String(value);
      if (sColor.length === 0) {
        throw new Error('color name cannot be a zero length string');
      }

      theColor = sColor;

      console.log('called set -> color: ' + theColor);
    }
  });
}


var aBetterCar = new Car();
aBetterCar.color = 'red';
console.log(aBetterCar.color);