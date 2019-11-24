/*
 * ‘Functor’ is an algebraic structure.
 * The functor structure must have a .map() method with the following type signature:
 * map :: Functor f => f a ~> (a -> b) -> f b
 * [] If u is a functor, then calling u.map(x => x) must be equivalent to u. This is the ‘identity law.’
 * [See Example 1] If u is a functor, and f and g are functions, then calling u.map(x => f(g(x)))
 * is equivalent to calling u.map(g).map(f). This is the ‘composition law.’
 */

interface Functor<A> {
    map<B>(f: (a: A) => B): Functor<B>;
}

/** Example 1 */
const a = [1, 2, 3];
const g = (x) => x + 1;
const f = (y) => y * 2;
const result = a.map(g).map(f);
const result2 = a.map(x => f(g(x)));
// result == result2

/** Example 2 */
function ap(m) {
    return m.flatMap(f => this.map(f));
}

const bases = ['ice cream', 'banana', 'strawberry'];
const toppings = ['nuts', 'chocolate sauce', 'sprinkles'];
const combine = a => b => `${a} with ${b}`;
const basesWith = bases.map(combine);
const combos = ap.call(toppings, basesWith);
// ["ice cream with nuts", "ice cream with chocolate sauce", "ice cream with sprinkles",
// "banana with nuts", "banana with chocolate sauce", "banana with sprinkles", "strawberry with nuts",
// "strawberry with chocolate sauce", "strawberry with sprinkles"]
