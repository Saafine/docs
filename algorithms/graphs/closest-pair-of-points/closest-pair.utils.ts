export function isInRange(a: number, b: number, distance: number): boolean {
  return Math.abs(a - b) <= distance;
}
