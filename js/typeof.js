// everything commented out => // Test variable undefined or has no value
// let test; // => // Test variable undefined or has no value
// let test = null; // => // Test variable undefined or has no value
// let test = 5;

// Order matters. Typeof xx !== 'undefined' must be first, or it will throw an error
if (typeof test !== 'undefined' && test !== null && typeof test === 'number') {
  document.writeln(test);
} else {
  document.writeln('Test variable undefined or has no value');
}