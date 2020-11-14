function solve(n, k) {
    const A = ['X', 1, 2, 3, 4];
    debugger;
    // for n = 4, it should be: 1, 2, 3, 4
    // (najmniejszy ciag rosnacy)
    // for (let i = 1; i <= k; i++) {
    //     A[i - 1] = i;
    // }

    let p = k;

    while (p >= 1) {
        console.log(A);

        if (A[k] === n) {
            p = p - 1;
        } else {
            p = k
        }

        if (p >= 1) {
            for (let i = k; i >= p; i--) {
                A[i] = A[p] + i - p + 1;
            }
        }
    }
    return A;
}

// Ciąg podzbiorów 4 elementowych zbioru {1, ..., 6} wygenerowany przez algorytm
solve(6, 4);

