// The constructor to decorate
function MacBook() {

  this.cost = function() {
    return 997;
  };
  this.screenSize = function() {
    return 11.6;
  };

}

// Decorator 1
function memory(macbook) {

  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };

}

// Decorator 2
function engraving(macbook) {

  var v = macbook.cost();
  macbook.cost = function() {
    return v + 200;
  };

}

// Decorator 3
function insurance(macbook) {

  var v = macbook.cost();
  macbook.cost = function() {
    return v + 250;
  };

}

var mb = new MacBook();
memory(mb);
engraving(mb);
insurance(mb);

// Outputs: 1522
console.log(mb.cost());

// Outputs: 11.6
console.log(mb.screenSize());

/**
 * Abstract decorators
 */

// Utilities required for this example
// ========================================

// extend()
// Extend an object a with the properties
// in object b
function extend( a, b ){
  for( var key in b )
    if( b.hasOwnProperty(key) )
      a[key] = b[key];
  return a;
}

// Interface()
// An interface constructor
// Note: interface is a reserved word in JavaScript and is only used here for demonstration purposes.
var Interface = function (name, methods) {
  if (arguments.length != 2) {
    throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
  }
  this.name = name;
  this.methods = [];
  for (var i = 0, len = methods.length; i < len; i++) {
    if (typeof methods[i] !== 'string') {
      throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
    }
    this.methods.push(methods[i]);
  }
};


// Static class method.
Interface.ensureImplements = function (object) {
  if (arguments.length < 2) {
    throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
  }
  for (var i = 1, len = arguments.length; i < len; i++) {
    var interface = arguments[i];
    if (interface.constructor !== Interface) {
      throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
    }
    for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
      var method = interface.methods[j];
      if (!object[method] || typeof object[method] !== 'function') {
        throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
      }
    }
  }
};


// Macbook decorator abstract decorator class

var MacbookDecorator = function( macbook ){

  Interface.ensureImplements( macbook, Macbook );
  this.macbook = macbook;

};

MacbookDecorator.prototype = {
  addEngraving: function(){
    return this.macbook.addEngraving();
  },
  addParallels: function(){
    return this.macbook.addParallels();
  },
  add4GBRam: function(){
    return this.macbook.add4GBRam();
  },
  add8GBRam:function(){
    return this.macbook.add8GBRam();
  },
  addCase: function(){
    return this.macbook.addCase();
  },
  getPrice: function(){
    return this.macbook.getPrice();
  }
};

/////

var CaseDecorator = function( macbook ){
  this.macbook = macbook;
};

// Let's now extend (decorate) the CaseDecorator with
// a MacbookDecorator
extend( CaseDecorator, MacbookDecorator );

CaseDecorator.prototype.addCase = function(){
  return this.macbook.addCase() + "Adding case to macbook";
};

CaseDecorator.prototype.getPrice = function(){
  return this.macbook.getPrice() + 45.00;
};

var Macbook = new Interface( "Macbook",
  ["addEngraving",
    "addParallels",
    "add4GBRam",
    "add8GBRam",
    "addCase"]);

// A Macbook Pro might thus be represented as follows:
var MacbookPro = function(){
  // implements Macbook
};

MacbookPro.prototype = {
  addEngraving: function(){
  },
  addParallels: function(){
  },
  add4GBRam: function(){
  },
  add8GBRam:function(){
  },
  addCase: function(){
  },
  getPrice: function(){
    // Base price
    return 900.00;
  }
};
////


// Instantiation of the macbook
var myMacbookPro = new MacbookPro();

// Outputs: 900.00
console.log( myMacbookPro.getPrice() );

// Decorate the macbook
var decoratedMacbookPro = new CaseDecorator( myMacbookPro );

// This will return 945.00
console.log( decoratedMacbookPro.getPrice() );