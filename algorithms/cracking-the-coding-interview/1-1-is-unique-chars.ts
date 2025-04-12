// Is Unique Chars
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Ask Questions:
// is the string an ASCII string (128 characters) or a Unicode string (over 140,000 characters) ?

// Other solutions:
// If we can't ue additional data structures, we can do the following:
// - compare every character of the string. This will take O(n^2) time and O(1) space
// - if we can modify the input string, we could sort the string in O(n log(n)) time and then linearly check the string
// for neighboring characters that are identical. Careful: many sorting algorithms take up extra space.

// Time Complexity: O(n) - you could argue that the time complexity is O(1), since the loop will never iterate through
// more than 256 characters
// Space complexity: O(1)
// Assume the input is extended ASCII string
export function isUniqueChars(str: string): boolean {
    // We can immediately return false if the string length exceeds the numbers of unique characters in the alphabet.
    // After all, you can't form a string of 280 unique characters out of a 128-character alphabet
    if (str.length > 256) return false;

    // Create a new boolean array of 256 characters to account for basic ASCII and extended ASCII characters
    const charSet: boolean[] = new Array(256).fill(false);

    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        // Assign the ASCII value of the current character to the variable val
        const val: number = str.charCodeAt(i);

        // If the character is already in the charSet, return false
        if (charSet[val]) {
            return false;
        }
        // Mark the character as seen
        charSet[val] = true;
    }
    // If all characters are unique, return true
    return true;
}


export function isUniqueChars2(str: string): boolean {
    const charMap = new Map<string, true>();

    for (const char of str) {
        const exists = charMap.has(char)
        if (exists) return false;
        charMap.set(char, true)
    }

    return true;
}

export function isUniqueChars3(str: string): boolean {
    const sorted = str.split('').sort();

    let previous = null;
    for (const char of sorted) {
        if (previous === char) return false;
        previous = char;
    }

    return true;
}

