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

const P = ['_', 1, 2, 3];
const n = 3;

function PERM(n) {
    debugger;
    const stack = [[n, P]];

    while(stack.length) {
        const [m, A] = stack.pop();
        if (m === 1) {
            console.log(A)
        } else {
            for (let i = 1; i <= m; i++) {
                stack.push([m - 1, [...A]])
                if (i < m) {
                    swap(A, B(m, i), m)
                }
            }
        }
    }
}

PERM(n);

function swap(array, indexA, indexB) {
    const tempA = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tempA;
}

