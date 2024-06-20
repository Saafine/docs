// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other

// Solution 1:
// generate all permutations of strA
// check if strB is found in strA permutations map

// Solution 2:
// count chars in strA
// keep reducing chars in strA until zeroed

// Solution 3:
// sort both strings and compare them

// Assume character set was ASCII
export function checkPermutation(strA: string, strB: string): boolean {
    if (strA.length !== strB.length) return false;

    const charsMap: Map<string, number> = new Map<string, number>();

    for (const char of strA) {
      const count = charsMap.get(char) ?? 0
      charsMap.set(char, count + 1)
    }

    for (const char of strB) {
        const count = charsMap.get(char)
        if (count === undefined || count === 0) return false;
        charsMap.set(char, count - 1)
    }

    return true;
}
