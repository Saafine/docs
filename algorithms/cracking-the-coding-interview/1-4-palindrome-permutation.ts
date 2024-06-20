// Palindrome Permutation
// Given a string, write function to check if it is a permutation of palindrome.
// Palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// You can ignore casing and non-letter characters.

// Example:
// Input: Tact Coa
// Output: True (permutations: "taco cat" , "atco cta", etc.)

export function isPalindromePermutation(str: string): boolean {
  if (str.length < 2) return true;
  const frequencyTable = buildFrequencyTable(str);

  let odd = 0;
  for (const value of frequencyTable.values()) {
    if (!isEven(value)) {
      odd += value;
    }
  }

  return odd < 2;
}

function buildFrequencyTable(str: string) {
  const charsMap = new Map<string, number>();

  for (const _char of str) {
    if (!/[a-zA-Z]/.test(_char)) continue;
    const char = _char.toLowerCase();
    const count = charsMap.get(char) ?? 0;
    charsMap.set(char, count + 1);
  }
  return charsMap;
}

function isEven(value: number): boolean {
  return value % 2 === 0;
}
