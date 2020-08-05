function utils(value) {
    return Math.round(value * 10000) / 10000;
}

function areTheNumbersAlmostEqual(num1, num2) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}

function isInteger(x) { // or Number.isInteger()
    return (x ^ 0) === x;
}
