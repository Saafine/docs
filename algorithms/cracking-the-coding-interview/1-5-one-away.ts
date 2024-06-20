// One Away
// There are three types of edits that can be performed on strings:
// - insert a character
// - remove a character
// - replace a character
// Given two strings, write a function to check if the are one edit (or zero edits) away.
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

export function isOneAway(textA: string, textB: string): boolean {
  const lengthDiff = Math.abs(textA.length - textB.length);
  if (lengthDiff > 1) return false;
  const maxLength = Math.max(textA.length, textB.length);

  for (let x = 0; x < maxLength; x++) {
    if (textA[x] !== textB[x]) return isComparable(textA, textB, x);
  }

  return true;
}

function isComparable(textA: string, textB: string, x: number): boolean {
  if (isSameTextByCharRemove(textA, textB, x)) return true;
  if (isSameTextByCharReplace(textA, textB, x)) return true;
  return false;
}

function isSameTextByCharReplace(textA: string, textB: string, index: number): boolean {
  const charA = textA[index];
  const charB = textB[index];
  const alteredA = replaceChar(textA, index, charB);
  const alteredB = replaceChar(textB, index, charA);

  return alteredA === textB || alteredB === textA;
}

function isSameTextByCharRemove(textA: string, textB: string, index: number): boolean {
  let textToAlter = textA.length > textB.length ? textA : textB;
  const textToCompare = textA === textToAlter ? textB : textA;
  const alteredText = textToAlter.slice(0, index) + textToAlter.slice(index + 1);
  return textToCompare === alteredText;
}

function replaceChar(str: string, index: number, chr: string | undefined) {
  if (!chr) return str;
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}
