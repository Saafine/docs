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
 * ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
 * ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's
 */