/**
 * SUBCLASSING
 */
var Person = function(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male';

};

// a new instance of Person can then easily be created as follows:
var clark = new Person('Clark', 'Kent');

// Define a subclass constructor for for "Superhero":
var Superhero = function(firstName, lastName, powers) {

    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.

    Person.call(this, firstName, lastName);

    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};

Superhero.prototype = Object.create(Person.prototype); // LINE (A)

var man = new Person('Clark', 'Kent');
var superman = new Superhero('Clark', 'Kent', ['flight', 'heat-vision']);
var superman2 = new Superhero('Clark2', 'Kent2', ['flight2', 'heat-vision2']);

console.log(man instanceof Person); // true
console.log(man instanceof Superhero); // false

console.log(superman instanceof Person); // true -> IF LINE (A) is commented out it will output false
console.log(superman instanceof Superhero); // true

/**
 * Mixins using underscore
 */
var myMixins = {

    moveUp: function() {
        console.log('move up');
    },

    moveDown: function() {
        console.log('move down');
    },

    stop: function() {
        console.log('stop! in the name of love!');
    }
};

// A skeleton carAnimator constructor
function CarAnimator() {
    this.moveLeft = function() {
        console.log('move left');
    };
}

// A skeleton personAnimator constructor
function PersonAnimator() {
    this.moveRandomly = function() { /*..*/
    };
}

// Extend both constructors with our Mixin
_.extend(CarAnimator.prototype, myMixins);
_.extend(PersonAnimator.prototype, myMixins);

// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!

/**
 * Mixin without underscore
 */
    // Define a simple Car constructor
var Car = function(settings) {

        this.model = settings.model || 'no model provided';
        this.color = settings.color || 'no colour provided';

    };

// Mixin
var Mixin = function() {
};

Mixin.prototype = {

    driveForward: function() {
        console.log('drive forward');
    },

    driveBackward: function() {
        console.log('drive backward');
    },

    driveSideways: function() {
        console.log('drive sideways');
    }

};


// Extend an existing object with a method from another
function augment(receivingClass, givingClass) {

    // only provide certain methods
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for (var methodName in givingClass.prototype) {

            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}


// Augment the Car constructor to include "driveForward" and "driveBackward"
augment(Car, Mixin, 'driveForward', 'driveBackward');

// Create a new Car
var myCar = new Car({
    model: 'Ford Escort',
    color: 'blue'
});

// Test to make sure we now have access to the methods
myCar.driveForward();
myCar.driveBackward();

// Outputs:
// drive forward
// drive backward

// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment(Car, Mixin);

var mySportsCar = new Car({
    model: 'Porsche',
    color: 'red'
});

mySportsCar.driveSideways();

// Outputs:
// drive sideways

// Mixins in Angular
// import { Component, OnInit } from '@angular/core';
// https://github.com/angular/components/blob/master/src/material/checkbox/checkbox.ts
export type Constructor<T> = new(...args: any[]) => T;


export interface CanTest {
    test: boolean;
}

export type CanTestConstructor = Constructor<CanTest>;

export function mixinTest<T extends Constructor<{}>>(base: T): CanTestConstructor & T {
    return class extends base {
        test = false;

        constructor(...args: any[]) {
            super(...args);
        }
    };
}

export interface CanTest2 {
    test2: string;
}

export type CanTest2Constructor = Constructor<CanTest2>;

export function mixinTest2<T extends Constructor<{}>>(base: T): CanTest2Constructor & T {
    return class extends base {
        test2 = 'lol';

        constructor(...args: any[]) {
            super(...args);
        }
    };
}


class TestBase {
    testBase = '123';
}

// const _MatCheckboxMixinBase =
//   mixinTabIndex(mixinColor(mixinTest(mixinDisabled(MatCheckboxBase)), 'accent'));

const testMixinBase = mixinTest2(mixinTest(TestBase));

// @Component({
//   selector: 'app-test2',
//   templateUrl: './test2.component.html',
//   styleUrls: ['./test2.component.css']
// })
export class Test2Component extends testMixinBase {
    value = 'init';

    ngOnInit(): void {
        console.log(this.test);
        console.log(this.testBase);
        console.log(this.test2);
    }
}
