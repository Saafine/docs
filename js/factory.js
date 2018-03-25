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


// Factories help avoiding 'this' keyword problems: a factory object can be referenced by a html button without the need to bind (this) keyword
const dog = () => {
  const sound = 'wooof';
  return {
    talk: function () {
      console.log(sound)
    }
  };
};

const sniffles = dog();
sniffles.talk();