const meta = {
    link: '',
    name: 'Shifting strings',
    tags: []
};

const testData = [
    {
        args: ['abcdefg', 2, 4], // cdefgab, fgabcde
        output: 'fgabcde'
    },
    {
        args: ['abcd', 1, 2], // bcda, dabc
        output: 'dabc'
    },
    {
        args: ['abcdef', 10, 8],
        output: 'cdefab'
    },
    {
        args: ['abcdef', 10, 10],
        output: 'abcdef'
    },
    {
        args: ['abcdef', 0, 0],
        output: 'abcdef'
    },
    {
        args: ['a', 0, 1],
        output: 'a'
    }
];


function reduceShifts(shifts, max) {
    return shifts % max;
}

function shiftLeft(str, shifts) {
    if (shifts === 0 ) return str;
    const left = str.slice(0, shifts);
    const right = str.slice(shifts);
    return right.concat(left);
}

function shiftRight(str, shifts) {
    if (shifts === 0 ) return str;
    const left = str.slice(-shifts);
    const right = str.slice(0, str.length - shifts);
    return left.concat(right);
}

function getShiftedString(str, leftShifts, rightShifts) {
    const leftShiftsReduced = reduceShifts(leftShifts, str.length);
    const rightShiftsReduced = reduceShifts(rightShifts, str.length);

    const strShiftedLeft = shiftLeft(str, leftShiftsReduced);
    const strShiftRight = shiftRight(strShiftedLeft, rightShiftsReduced);

    return strShiftRight;
}
