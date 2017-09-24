class DatabaseConnection {
  constructor (host, port) {
    this.host = host;
    this.port = port;
  }
}

const makeDeleteUser = (db) => {
  console.log('deleting user from', db.host);
  return `${db.port} host deleted`
};

const makeCreateUser = (db) => {
  console.log('deleting user from', db.host);
  return `${db.port} host created`
};

const makeSelectUser = (db) => {
  console.log('deleting user from', db.host);
  return `${db.port} host selected`
};

const connection = new DatabaseConnection('database.myapp.com', 2121);

// EXAMPLE 1
// ---------------
// const deleteUser = makeDeleteUser(connection);
// const createUser = makeCreateUser(connection);
// const selectUser = makeSelectUser(connection);


// EXAMPLE 2, avoiding repetition, but works exactly the same as in example 1
// ---------------
const factories = [
  makeDeleteUser,
  makeCreateUser,
  makeSelectUser
];

// ES6 deconstructing
const [deleteUser, createUser, selectUser] = factories.map((factory) => factory(connection));