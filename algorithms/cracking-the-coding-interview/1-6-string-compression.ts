// String Compression
// Implement a method to perform a basic string compression
// using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string, your method
// should return original string.
// You can assume the string has only uppercase and lowercase letters (a-z)

export function stringCompression(text: string): string {
  let compressed = '';
  let count = 0;
  let previousChar = text[0];

  for (const char of text) {
    const compressedCharCount = count;
    const compressedChar = previousChar;
    const isCharRepeated = previousChar === char;
    previousChar = char;
    count = isCharRepeated ? count + 1 : 1;

    if (!isCharRepeated) {
      compressed = `${compressed}${compressedChar}${compressedCharCount}`;
    }

  }

  // TODO [P. Labus] 
  compressed = previousChar ? `${compressed}${previousChar}${count}` : compressed;

  return compressed.length < text.length ? compressed : text;
}
