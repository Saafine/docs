// Zero Matrix
// Write an algorithm such that if an element in an M x N matrix is 0, its entire row and columns are set to 0

export function zeroMatrix(matrix: Array<number[]>): Array<number[]> {
  const n = matrix.length;

  for (let column = 0; column < n; column++) {
    for (let row = 0; row < n; row++) {
      const value = matrix[column]?.[row];
      const isZero = value === 0;
      if (isZero) {
        // @ts-ignore
        matrix[column][0] = 0;
        // @ts-ignore
        matrix[0][row] = 0;
        break;
      }
    }
  }

  for (let column = 0; column < n; column++) {
    const isZeroRow = matrix[column]?.[0] === 0;
    for (let row = 0; row < n; row++) {
      const isZeroColumn = matrix[0]?.[row] === 0;
      if (isZeroRow || isZeroColumn) {
        // @ts-ignore
        matrix[column][row] = 0;
      }
    }
  }

  return matrix;
}
