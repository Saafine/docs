import { render } from './polygon-render';
import { checkPolygon } from './polygon-core';
import { input } from './inputs/002';
import { isValidPolygon } from './polygon-validation';

console.log(`Input: ${ input }`);

function run() {
    if (!isValidPolygon(input)) {
        console.warn('Invalid polygon');
        return;
    }

    const result = checkPolygon(input);
    render(input, {
        local_min: result.local_min,
        local_max: result.local_max,
        min_combined: result.min_combined,
        max_combined: result.max_combined,
    });

    console.log(result);
}
run();

