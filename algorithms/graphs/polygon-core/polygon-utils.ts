export function textToCoords(text: string): Array<number[]> {
    return text.split('\n').filter((x) => x !== '').map((each) => each.split(',').map(Number));
}
