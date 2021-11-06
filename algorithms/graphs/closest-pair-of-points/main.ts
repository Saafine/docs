import { render } from './render';
import { input } from './inputs/001';
import { checkPoints } from './closest-pair-of-points';
import { Point } from './point';

console.log(`Input: ${ input }`);

function run() {
    const points = input.map((coords) => new Point(coords));
    const result = checkPoints(points);
    render(input);
    console.log(result);
}

run();

