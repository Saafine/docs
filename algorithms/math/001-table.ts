import { first as getFirst, last } from 'lodash';

/*
 Zadanie 10. Na ile sposobów mozna ustawic: 4 mezczyzn oraz 7 kobiet przy okraglym stole
 w taki sposób, aby zaden mezczyzna nie sasiadowal z innym mezczyzna?
 */
export function getTotalTableConfigurations(menCount: number, womenCount: number): number {
  const men = getUniqueNames(menCount).map(toManName);
  const women = getUniqueNames(womenCount).map(toWomanName);
  const all = men.concat(women);

  const solved = solve(all)
    .map(reorderToEqualStart)
    .map((solution) => solution.join());

  return new Set(solved).size;
}

function solve(all: string[]): Array<string[]> {
  const configurations: Array<string[]> = [];

  function findConfiguration(people: string[], configuration: string[] = []): void {
    if (!people.length) configurations.push(configuration);
    const isLast = people.length === 1;
    const first: string | undefined = getFirst(configuration);
    const previous: string | undefined = last(configuration);

    for (let x = 0; x < people.length; x++) {
      const person = people[x] as string;
      const isPreviousMan = !!previous && isManName(previous);
      const isNextMan = isLast && !!first && isManName(first);
      const canPlaceMan = !isPreviousMan && !isNextMan;
      const isValid = isWomanName(person) ? true : canPlaceMan;

      if (isValid) {
        const newConfiguration: string[] = configuration.concat(person);
        findConfiguration(skip(people, x), newConfiguration);
      }
    }
  }

  findConfiguration(all);

  return configurations;
}

function getUniqueNames(count: number): string[] {
  return Array(count)
    .fill(null)
    .map((_, index) => `${index + 1}`);
}

function toManName(name: string): string {
  return `M${name}`;
}

function toWomanName(name: string): string {
  return `K${name}`;
}

function isManName(name: string): boolean {
  return name.startsWith('M');
}

function isWomanName(name: string): boolean {
  return name.startsWith('K');
}

function skip<T>(elements: T[], index: number): T[] {
  return elements.filter((_, i) => i !== index);
}

function reorderToEqualStart(elements: string[]): string[] {
  // force M1 to always be 1st
  const firstElementIndex = elements.indexOf('M1');

  const left = elements.slice(firstElementIndex);
  const right = elements.slice(0, firstElementIndex);

  return left.concat(right);
}
