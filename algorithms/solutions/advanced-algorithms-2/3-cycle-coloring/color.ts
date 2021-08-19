interface PrintParams {
    cValues: number[];
    binaries: string[];
    kValues: number[];
    bits: number[];
    stage: number;
}

function numToBinary(num: number): string {
    return (num >>> 0).toString(2);
}

function addLeftPadding(binary: string, _, source: string[]): string {
    const maxLen = source.reduce((max, current) => max > current.length ? max : current.length, 0);
    return binary.padStart(maxLen, '0');
}

function getKwithBit(binary: string[]): { kValues: number[], bits: number[] } {
    const kValues: number[] = [];
    const bits: number[] = [];

    const binaryLength = binary[0].length;

    for (let x = 0; x < binary.length; x++) {
        const current = binary[x];
        const next = binary[x + 1] || binary[0];
        let k = 0;
        let lastMatchingBit = current[binaryLength - 1];

        for (let bitIndex = binaryLength - 1; bitIndex >= 0; bitIndex--) {
            const currentBit = current[bitIndex];
            const nextBit = next[bitIndex];
            if (currentBit === nextBit) {
                k++;
                lastMatchingBit = currentBit;
            } else {
                kValues.push(k);
                bits.push(Number(lastMatchingBit));
                break;
            }
        }
    }

    return { kValues: kValues, bits };
}

function getCValues(kValues: number[], bits: number[]): number[] {
    return kValues.map((k, index) => k * 2 + bits[index]);
}

function isNextNeeded(cValues: number[]): boolean {
    return cValues.some((c) => c > 5);
}

function prettyPrint({ cValues, binaries, kValues, bits, stage }: PrintParams) {
    console.log('-----------------------------------------------------');
    console.log(` ------------------- ETAP ${stage} ---------------------`);
    console.log('-----------------------------------------------------');
}

function run(input: number[], stage = 0): void {
    const binaries: string[] = input.map(numToBinary).map(addLeftPadding);
    const { kValues, bits } = getKwithBit(binaries);
    const cValues = getCValues(kValues, bits);

    prettyPrint({ binaries, kValues, bits, cValues, stage });

    if (isNextNeeded(cValues)) {
        run(cValues, stage + 1);
    } else {
        console.log('Done');
    }
}

const ab = [17, 61, 44, 38, 54, 27, 13, 22];
run(ab);



// const b = [4, 0, 1, 5, 0, 4, 1, 2];
// const b = [61];
// const result = b.map(numToBinary);


// na ilu bitach zapisuje sie liczbe m? [log m] + 1 (podstawa 2)

// c(v) = maksymlanie m
// b(n) [log m] + 1
// k = [log m]
// bit = max 1
// c' = 2[logm] + 1


// poczatkowe kolory mozna dac po id procesora zeby byly unikalne


// BaseColoring
// EREW PRAM - wszystkie procesory na raz odczytuja swoja swoja wartosc, a pozniej wszystkie procesory na raz odczytuja wartosc nastepnika
// T(n) = O(1) // czas staly
// W(n) = O(n) // praca linowa
// P(n) = n // n procesorow
// Algorytm 19
function baseColoring() {
    // for (let x = 1; x < n; x++) {
    // k = 1 // najmniej znaczacy bit ktory rozni kolor danego wierzcholka c(i) od koloru nastepnika c(S(i))
    // bit = wartosc tego najmniejszego bitu
    // c = 2k + bit
    // }
}
