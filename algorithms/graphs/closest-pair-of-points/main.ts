import { render } from './render';
import { input } from './inputs/001';
import { checkPoints } from './closest-pair-of-points';

console.log(`Input: ${ input }`);

function run() {
    const result = checkPoints(input);
    render(input);
    console.log(result);
}

run();

