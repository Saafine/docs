// https://i.imgur.com/SFCGye8.png
// Given [2, 1, 3, 2, 1, 2, 1, 2]
// Return [2, 3, 6, 8, 9, 11, 12, 14]
// Given index, returns sum of elements to that index, for example: i = 2 -> 2 + 1 + 3 = 6

// const A = ['X', 2, 1, 3, 2, 1, 2, 1, 2];
const A = ['X', 2,1,3,2,1,3,4,5];
let B = [];

const n = A.length - 1;

const logn = Math.log2(n);
console.log(n + ' elementow');
// Zad 3
console.log(`Ile iteracji wykona pętla for dla danej tablicy o ${n} elementach?, ${logn}`);

for (let i = 0; i < A.length; i++) { // !! < A.length because we have 'X' at first index
    // @ts-ignore
    B[i] = A[i];
}

console.log("Krok 0", B);

const processorIndexToOperationsCount = {};

for (let h = 1; h <= logn; h++) {
    let TEMP_B = [...B];
    for (let i = Math.pow(2, h - 1) + 1; i <= n; i++) { // tutaj musialem dodac 1 do i, żeby zaczynało od następnej liczby
        if (h === 2) {
            // Zad 1
            console.log(`W tym kroku Dzialaja procesory o identyfikatorach ${Math.pow(2, h - 1) + 1}:${n}`);
            console.log(`Ilosc dzialajacych procesorow w tym kroku: ${n - (Math.pow(2, h - 1))}`);
            console.log(`Krok ${h}: ${ B[i - Math.pow(2, h - 1)] } + ${ B[i] }`);
        }
        TEMP_B[i] = B[i - Math.pow(2, h - 1)] + B[i];

        // Zad 2
        processorIndexToOperationsCount[i] = processorIndexToOperationsCount[i] ? processorIndexToOperationsCount[i] + 1: 1;
    }
    B = TEMP_B;
    if (h === 3) console.log(`Krok ${h}`, B.toString());
}

console.log('Result');
console.log(B);
console.log(processorIndexToOperationsCount);


// Zad 1
// jeżeli uruchomimy algorytm dla tablicy o ośmiu elementach, to w kroku h=1 działają procesory o identyfikatorach od

// Zad 2
// Ile operacji dodawania wykonały poszczególne procesory?

// Zad 3
// Ile iteracji wykona pętla for dla danej tablicy o n elementach?

