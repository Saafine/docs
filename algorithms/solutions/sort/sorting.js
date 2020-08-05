const sorting = {
    numbers: {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    },
    strings: {
        // ascending === alphabetical
        asc: (_a, _b) => {
            let a = _a.toUpperCase();
            let b = _b.toUpperCase();

            if (a < b) {
                return -1;
            }

            if (a > b) {
                return 1;
            }

            // names must be equal
            return 0;
        },
        desc: (_a, _b) => {
            let a = _a.toUpperCase();
            let b = _b.toUpperCase();

            if (b < a) {
                return -1;
            }

            if (b > a) {
                return 1;
            }

            // names must be equal
            return 0;
        }
    },
    sortingNonASCII: {
        asc: (a, b) => {
            return a.localeCompare(b);
        },
        desc: (a, b) => {
            return b.localeCompare(a);
        }
    }
};

const test = [1, 3, 2];
const numberAscending = [...test].sort(sorting.numbers.asc);  // [1, 2, 3]
const numberDescending = [...test].sort(sorting.numbers.desc); // [3, 2, 1]

const testStr = ['a', 'd', 'C', 'b'];

// By default, the sort() method sorts the values as strings in alphabetical and ascending order.
// NOTICE UPPER CASE !!
const stringAscendingDefault = [...testStr].sort(); // ['C', 'a', 'b', 'd']
const stringAscending = [...testStr].sort(sorting.strings.asc); // ['a', 'b', 'C', 'd']
const stringDescending = [...testStr].sort(sorting.strings.desc); // ['d', 'C', 'b', 'a']
const stringNonAsciiAscending = [...testStr].sort(sorting.sortingNonASCII.asc); // ['a', 'b', 'C', 'd']
const stringNonAsciiDescending = [...testStr].sort(sorting.sortingNonASCII.desc); // ['d', 'C', 'b', 'a']





















