// 1. Checkbox button (subject) is defined and extended with properties provided by new Subject():
// addObserver, removeObserver and notify
// 2. Checkbox button gets eventlistener 'onclick' added, which fires its .notify() method
// 3. Checkbox button is assigned with an observer (check), which has an .update method defined
// 4. Every time .notify() gets triggered, it loops through the list off all of the subject's observers
// and fires .update function for each of them.


/**
 * "One or more observers are interested in the state of a subject and register their interest with
 * the subject by attaching themselves. When something changes in our subject that the observer may be
 * interested in, a notify message is sent which calls the update method in each observer. When the
 * observer is no longer interested in the subject's state, they can simply detach themselves."
 */

/**
 *
 * Subject: maintains a list of observers, facilitates adding or removing observers
 * Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
 */

/**
 * ObserverList is needed by the Subject
 * Each subject can add, remove and notify all of its observers
 */
function ObserverList() {
  this.observerList = [];


  this.add = function(obj) {
    return this.observerList.push(obj);
  };

  /**
   * count is used when notyfing observers
   */
  this.count = function() {
    return this.observerList.length;
  };

  /**
   * get is used when notyfing observers
   */
  this.get = function(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  };

  /**
   * indexOf is used when removing observers
   */
  this.indexOf = function(obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  };

  this.removeAt = function(index) {
    this.observerList.splice(index, 1);
  };
}

function Subject() {
  this.observers = new ObserverList();

  this.addObserver = function(observer) {
    this.observers.add(observer);
  };

  this.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  };

  this.notify = function(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  };
}

// The Observer
function Observer() {
  this.update = function() {
  };
}

// Extend an object with an extension
function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

// References to our DOM elements
var controlCheckbox = document.getElementById('mainCheckbox');

// Concrete Subject

// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject());
// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
  controlCheckbox.notify(controlCheckbox.checked);
};

const check = new Observer();
check.update = () => {
  console.log('hey');
};

controlCheckbox.addObserver(check);


