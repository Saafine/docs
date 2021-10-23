import { render } from './polygon-render';
import { input_001 } from './inputs/001';
import { checkPolygon } from './polygon-core';

const input = input_001;

console.log(`Input: ${input}`);
const result = checkPolygon(input)
render(input)
console.log(result);
