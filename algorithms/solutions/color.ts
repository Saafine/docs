// EREW PRAM - wszystkie procesory na raz odczytuja swoja swoja wartosc, a pozniej wszystkie procesory na raz odczytuja wartosc nastepnika
// T(n) = O(1) // czas staly
// W(n) = O(n) // praca linowa
// P(n) = n // n procesorow


// algorytm 19
function baseColoring() {
    // for (let x = 1; x < n; x++) {
        // k = 1 // najmniej znaczacy bit ktory rozni kolor danego wierzcholka c(i) od koloru nastepnika c(S(i))
        // bit = wartosc tego najmniejszego bitu
        // c = 2k + bit
    // }
}


// [17, 61, 44, 38, 54, 27, 13, 22],
// na binarne:


function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

// const ab = [17, 61, 44, 38, 54, 27, 13, 22];
const b = [4, 0, 1, 5, 0, 4, 1, 2];
// const b = [61];
const result = b.map(dec2bin);
console.log(result);


// na ilu bitach zapisuje sie liczbe m? [log m] + 1 (podstawa 2)

// c(v) = maksymlanie m
// b(n) [log m] + 1
// k = [log m]
// bit = max 1
// c' = 2[logm] + 1


// poczatkowe kolory mozna dac po id procesora zeby byly unikalne

