import { addBinary, addBinaryMatrix, Binary, BinaryMatrix } from '../binary-adding';

// EREW PRAM

export function addBinarySuboptimal(binaryA: Binary[], binaryB: Binary[]) {
    let B = [];

    const n = binaryA.length - 1;
    const logn = Math.log2(n);

    console.log(n + ' elementow');
    // Zad 3
    console.log(`Ile iteracji wykona pętla for dla danej tablicy o ${ n } elementach?, ${ logn }`);

    for (let i = 0; i < binaryA.length; i++) { // !! < A.length because we have 'X' at first index
        // @ts-ignore
        B[i] = i === 0 ? null : addBinary(binaryA[i], binaryB[i]);
    }

    console.log('Krok 0', B);

    const processorIndexToOperationsCount = {};

    for (let h = 1; h <= logn; h++) {
        let TEMP_B = JSON.parse(JSON.stringify(B));
        for (let i = 1; i <= n - Math.pow(2, h - 1); i++) { // tutaj musialem dodac 1 do i, żeby zaczynało od następnej liczby
            if (h === 1) {
                // Zad 1
                // console.log(`W tym kroku Dzialaja procesory o identyfikatorach 1:${n - Math.pow(2, h - 1)}`);
                // console.log(`Ilosc dzialajacych procesorow w tym kroku: ${n - Math.pow(2, h - 1) + 1}`);
                // console.log(`Krok ${h}: ${ B[i + Math.pow(2, h - 1)] } + ${ B[i] }`);
            }
            TEMP_B[i] = addBinaryMatrix(B[i], B[i + Math.pow(2, h - 1)]); // tutaj kolejnosc ma znaczenie

            // Zad 2
            processorIndexToOperationsCount[i] = processorIndexToOperationsCount[i] ? processorIndexToOperationsCount[i] + 1 : 1;
        }

        // // TODO [P. Labus] remove
        // const binaryMatrixSub: BinaryMatrix[] = [
        //     null,
        //     [[0, 1], [1, 1]],
        //     [[1, 0], [0, 1]],
        //     [[1, 0], [0, 1]],
        //     [[1, 0], [0, 1]],
        //     [[1, 0], [1, 0]],
        //     [[0, 0], [1, 0]],
        //     [[0, 1], [0, 1]],
        //     [[0, 1], [1, 1]],
        //
        // ];
        // if (h === 1) TEMP_B = binaryMatrixSub;
        B = JSON.parse(JSON.stringify(TEMP_B));
        if (h === 3) console.log(`Krok ${ h }:`, B);
    }

    const wynik = B.filter((x) => !!x).map(([upperRow], index) => {
        const [x, y] = upperRow;
        if (index === 0) return [y, x];
        return x;
    }).join().split(',').map(Number);

    console.log({wynik: wynik.toString()});

    return wynik;
}

// console.log('Result');
// console.log(B);
// console.log(processorIndexToOperationsCount);


// Zad 1
// jeżeli uruchomimy algorytm dla tablicy o ośmiu elementach, to w kroku h=1 działają procesory o identyfikatorach od

// Zad 2
// Ile operacji dodawania wykonały poszczególne procesory?

// Zad 3
// Ile iteracji wykona pętla for dla danej tablicy o n elementach?

// EREW PRAM
// W(n)=O(nlogn)
// T(n)=O(logn)
