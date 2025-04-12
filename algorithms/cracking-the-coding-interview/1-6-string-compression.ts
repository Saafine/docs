// String Compression
// Implement a method to perform a basic string compression
// using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string, your method
// should return original string.
// You can assume the string has only uppercase and lowercase letters (a-z)

// The runtime is O(p + k^2), where p is the size of the original string and k is the number of character sequences. For example,
// if the string is aabccdeeaa, then there are six character sequences. It's slow
// because string concatenation operates in O(n^2) time
export function stringCompression(text: string): string {
  let compressed = '';

  let pointer = 0;

  for (let x = 0; x <= text.length; x++) {
    const pointerChar = text[pointer];
    if (pointerChar === text[x]) continue;
    const count = x - pointer;
    pointer = x;
    compressed = `${compressed}${pointerChar}${count}`;
  }

  return compressed.length < text.length ? compressed : text;
}

export function stringCompression2(text: string): string {
  const compressed = [];

  let pointer = 0;

  for (let x = 0; x <= text.length; x++) {
    const pointerChar = text[pointer];
    if (pointerChar === text[x]) continue;
    const count = x - pointer;
    pointer = x;
    compressed.push(pointerChar as string + count)
  }

  const result = compressed.join('')
  return result.length < text.length ? result : text;
}
