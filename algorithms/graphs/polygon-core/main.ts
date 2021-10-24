import { render } from './polygon-render';
import { input_003 } from './inputs/003';
import { checkPolygon } from './polygon-core';

const input = input_003;

console.log(`Input: ${ input }`);
const result = checkPolygon(input);
render(input, {
    local_min: result.local_min,
    local_max: result.local_max
});
console.log(result);

// console.log(getPointOrientation({ p: new Point([10, 5]), q: new Point([5, 0]), r: new Point([0, 5]) }));
// render([[10, 5], [5, 0], [0, 5]]);
