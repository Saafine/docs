// String Rotation
// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
// using only one call to isSubstring (example: "waterbottle", is a rotation of "erbottlewat"

export function isRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const size = s1.length;

  for (let x = 0; x < size; x++) {
    const left = s1.slice(0, x);
    const right = s1.slice(x, size);
    if (right + left === s2) return true;
  }

  return false;
}


export function isRotation2(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;
    const size = s1.length;
    const combined = s1 + s1;

    for (let x = 0; x < size; x++) {
        const next = combined.slice(x, x + size)
        if (next === s2) return true;
    }

    return false;
}

export function isRotation3(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;
    const combined = s1 + s1;
    return combined.includes(s2);
}
