//  Arguments  |          Values          |               |
//       a     |    0.30000000000000004   |      0.54     |
//       b     |            0.3           |      0.55     |
//  precision  |             2            |       2       |
//   result    |           true           |      false    |
function isNearlyEqual(a: number, b: number, precision: number = 2 ): boolean {
    if (a === Infinity && b === Infinity) {
        return true; // Infinity - Infinity is NaN
    } else if (a === -Infinity && b === -Infinity) {
        return true; // -Infinity - -Infinity is NaN
    } else {
        const expectedDiff = Math.pow(10, -precision) / 2;
        const receivedDiff = Math.abs(b - a);
        return receivedDiff < expectedDiff;
    }
}
