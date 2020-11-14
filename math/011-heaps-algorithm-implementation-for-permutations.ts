function generatePermutations(A: number[], n: number = A.length): void {
    const c = Array(n).fill(0);

    console.log(A);

    let i = 0;

    while (i < n) {
        if (c[i] < i) {
            if (i % 2 === 0) {
                swap(A, 0, i);
            } else {
                swap(A, c[i], i);
            }
            console.log(A);
            c[i] += 1;
            i = 0;
        } else {
            c[i] = 0;
            i += 1;
        }
    }
}

function swap(array, indexA, indexB) {
    const tempA = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tempA;
}


generatePermutations([1, 2, 3]);
