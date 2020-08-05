function convertToDigits(num: number): number[] {
    const result = [];
    let n = Math.abs(num);

    do {
        result.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return result;
}
