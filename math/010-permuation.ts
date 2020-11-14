function B(m, i) {
    if (m % 2 === 0 && m > 2) {
        if (i < m - 1) {
            return i;
        } else {
            return m - 2
        }
    } else {
        return m - 1
    }
}

const P = ['X', 1, 2, 3];
const n = P.length - 1;

function PERM(m) {
    if (m === 1) {
        console.log(P)
    } else {
        for (let i = 1; i <= m; i++) {
            PERM(m - 1);
            if (i < m) {
                swap(P, B(m, i), m)
            }
        }
    }
}

function swap(array, indexA, indexB) {
    const tempA = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tempA;
}

PERM(n)
