function countDecimalsPlaces(num: number) {
    num = Math.abs(num);

    let i = 0;
    while (num % 1 > 0) {
        i++;
        num = num * 10;
    }

    return i;
}
