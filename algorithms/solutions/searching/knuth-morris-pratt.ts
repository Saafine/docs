// https://people.ok.ubc.ca/ylucet/DS/KnuthMorrisPratt.html

// https://i.imgur.com/kFRcQzX.png
// https://i.imgur.com/blPpyiO.png
function computePrefixFunction(P) {
    const s = [0]; // array of integeres of length |P|
    let border = 0;

    for (let i = 1; i < P.length; i++) {
        while (border > 0 && P[i] !== P[border]) {
            border = s[border - 1];
        }
        if (P[i] == P[border]) {
            border = border + 1;
        } else {
            border = 0;
        }
        s[i] = border;
    }

    return s;
}

// console.log(computePrefixFunction('abababcaab')); // [ 0, 0, 1, 2, 3, 4, 0, 1, 1, 2 ]

// https://i.imgur.com/9FRkVq7.png
// https://i.imgur.com/irGpyWz.png
function knuthMorrisPrattAlgorithm(T, P) {
    const n = T.length;
    const m = P.length;

    const pi = [9999, ...computePrefixFunction(P)];
    console.log(pi);
    T = '*' + T;
    P = '*' + P;

    let q = 0;

    for (let i = 1; i <= n; i++) {
        while (q > 0 && P[q + 1] !== T[i]) {
            q = pi[q]
        }

        if (i === 1) {
            console.log(P[q + 1]);
            console.log(T[i]);
        }

        if (P[q + 1] === T[i]) {
            q = q + 1;
        }

        if (q === m) {
            // console.log('Wzorzec wystepuje z przesunieciem', i - m);
            q = pi[q]
            return i - m;
        }
    }

    return -1;
}

const text = 'abcdef'; // n = 18 - wzorzec wystepuje z przesunieciem 2
const prefix = 'abc' // m = 6

// const text = 'mississippi'; // n = 18 - wzorzec wystepuje z przesunieciem 4
// const prefix = 'issip' // m = 6


console.log(knuthMorrisPrattAlgorithm(text, prefix));
