/*
 policz ilosc mozliowosci rozadania 7 zabawek dla czworki dzieki ale tak aby kazde dziecko cos dostalo


 Cw  5b

 Zadanie 5. Na ile sposobów mo»na rozda¢ 10 nierozró»nialnych pomara«czy oraz 7 rozró»nialnych
 zabawek dla 4 dzieci w nast¦puj¡cy sposób:
 a) dowolny sposób (pewne dzieci mog¡ nic nie otrzyma¢),
 b) tak, aby ka»de dziecko dostaªo przynajmniej jedn¡ pomara«cz¦.

 Cw 3
 Zadanie 15
 Zadanie 15. (*) Ile jest takich ró»nych sªów powstaªych z liter sªowa MISSISSIPPI, »e »adne P nie
 s¡siaduje z S ?

* */

class Child {
  inventory: number[] = [];
  nextChild!: Child;

  take(total: number): void {
    for (let x = 0; x < total; x++) {
      this.add(x, total);
    }
  }

  setNextChild(child: Child): void {
    this.nextChild = child;
  }

  private add(count: number, total: number): void {
    this.inventory.push(count);
    if(this.nextChild) this.nextChild.take(total - count);
  }
}

export function abcsvvv(oranges = 10, toys = 7, childrenCount = 4, minOrangePerChild = 1) {
  const alreadyUsedOrangesCount = minOrangePerChild * childrenCount;

  const children = Array(childrenCount)
    .fill(null)
    .map(() => new Child());

  for (let x = 0; x < children.length - 1; x++) {
    children[x]?.setNextChild(children[x + 1] as Child);
  }

  for (let x = 0; x < children.length; x++) {
    children[x]?.take(alreadyUsedOrangesCount);
  }

  console.log(children);
}
