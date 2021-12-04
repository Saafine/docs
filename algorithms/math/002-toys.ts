/*
 Zadanie 5. Na ile sposobów mozna rozdac 10 nierozróżnialnych pomaranczy oraz 7 rozróznialnych
 zabawek dla 4 dzieci w nastupujacy sposób:
 b) tak, aby kazde dziecko dostalo przynajmniej jedna pomarancze
*/

type Output = {
  orangeCount: number;
  toys: string[];
  childId: number;
};

export function solve(oranges = 10, toys = 7, childrenCount = 4, minOrangePerChild = 1) {
  const children: Output[] = Array(childrenCount)
    .fill(null)
    .map((_, i) => ({ childId: i, orangeCount: 0, toys: [] }));

  const alreadyUsedOrangesCount = minOrangePerChild * childrenCount;
  const total = getOranges(oranges - alreadyUsedOrangesCount, childrenCount);

  // for (let x = 0; x < children; x++) {
  //   const output: Output = { childId: x, orangeCount: 0, toys: [] };
  //   result.push(output);
  // }
}

export function getOranges(oranges: number, children: number): Array<number[]> {
  const solutions: Array<number[]> = [];

  for (let x = 0; x < children; x++) {
    const solution: number[] = [];
    solve2(oranges, x, children - 1, solution);
    solutions.push(solution);
  }

  return solutions;
}

function solve2(oranges: number, childId: number, lastChildId: number, output: number[]) {
  if (childId === lastChildId) {
    output[childId] = oranges;
    return;
  }

  for (let orange = 0; orange <= oranges; orange++) {
    output[childId] = orange;
    console.log('updating', orange);
    solve2(oranges - oranges, childId + 1, lastChildId, output);
  }
}

function solve3(childIdx: number, children: number[], oranges: number) {
  for (let x = 0; x < children.length; x++) {
    for (let y = 0; y < oranges; y++) {
      solve3(x, skip(children, x), y);
    }
  }
}

// function x(oranges: number, children: number): number {
//   if (children === 1) return oranges;
//
//   for (let x = 0; x < children; x++) {
//     for (let y = 0; y < oranges; y++) {
//
//     }
//   }
//
// }

function skip<T>(a: T[], skipIndex: number): T[] {
  return a.slice(0, skipIndex).concat(a.slice(skipIndex + 1));
}
