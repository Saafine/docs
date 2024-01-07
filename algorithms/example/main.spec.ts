// function solve2(input: string): number {
//   return 5;
// }

function fibonacci(to: number): any {
  if (to === 0 || to === 1) return 1;
  return fibonacci(to - 1) + fibonacci(to - 2)
}


describe('runner', () => {
  it('should run', () => {
    const result = fibonacci(5);
  });
});
