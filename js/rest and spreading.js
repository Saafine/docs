// Deconstructing
// --------------------
const getStuffAwesome = ({ id, name, force, verbose }) => {
  console.log(id);
};

getStuffAwesome({ id: 150, force: true, verbose: true });

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true
// ----------------------------------------------------

// Exclude Object Properties
const noPassword = ({ password, ...rest }) => rest
const user = {
  id: 100,
  name: 'Howard Moon',
  password: 'Password!'
}

noPassword(user) //=> { id: 100, name: 'Howard moon' }

// Add conditional properties
const user = { id: 100, name: 'Howard Moon' }
const password = 'Password!'
const userWithPassword = {
  ...user,
  id: 100,
  ...(password && { password })
}

userWithPassword //=> { id: 100, name: 'Howard Moon', password: 'Password!' }