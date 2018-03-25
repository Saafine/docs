/*
Function Declaration:
- function is the first keyword on the line
- it must have a name
- it can be used before definition (function declarations are moved,
- “hoisted”, to the top of their scope)
*/
function doSomething(){ /* code */ }
const doSomething = function doSomething(){ /* code */ };

/*
Function names should be used also when returning functions otherwise
 they will appear as anonymous in the Call Stack
*/
function once(){
  /*code*/
  return function runOnce() { /*code*/ }
}

// ----------------------------------------------------

/*
The Function Expression:
a) Anonymous Function Expression (function has no name)
b) Named Function Expression (function has a name)

- function is NOT the first keyword on the line
- the name is optional
- it needs to be defined then it can execute
- it can auto-execute after definition (called “IIFE”
Immediately Invoked Function Expression)
*/
const doSomething = function() { /* code */ }
