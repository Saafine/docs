// Rotate Matrix
// Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer,
// write a method to rotate the image by 90 degrees.
// Can you do this in place?

export function rotateMatrix(matrix: Array<string[]>): Array<string[]> {
  const n = matrix.length;
  const rotated = [];

  for (let x = 0; x < n; x++) {
    const row: string[] = [];
    rotated.push(row);
    for (let y = n - 1; y >= 0; y--) {
      const value = matrix[y]?.[x] as string;
      row.push(value);
    }
  }

  return rotated;
}

// In place rotation
export function rotateMatrix2(matrix: Array<string[]>): Array<string[]> {
  if (matrix.length === 0 || matrix.length !== matrix[0]?.length) return matrix;
  const n = matrix.length;

  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first]?.[i]; // save top

      // left -> top
      // @ts-ignore
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      // @ts-ignore
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      // @ts-ignore
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      // @ts-ignore
      matrix[i][last] = top; // right <- saved top
    }
  }

  return matrix;
}
