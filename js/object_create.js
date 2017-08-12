// Example 1 (Object Create)
// ---------------------
const dog = {
  makeSound: function () {
    console.log(this.sound);
  }
};

// new objects get craeted with a new prototype set to certain object (COMPLETELY NEW FRESH OBJECT)
const mark = Object.create(dog);
mark.sound = 'mewwouuf';
mark.makeSound();

const waffles = Object.create(dog);
waffles.sound = 'mrrwrrwrwrwr';
waffles.makeSound();
