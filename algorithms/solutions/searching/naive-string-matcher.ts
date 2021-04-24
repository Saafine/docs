// https://i.imgur.com/1dyMooY.png
function naiveStringMatcher(T: string, P: string) {
  const n = T.length
  const m = P.length
  let count = 0;
  for (let s = 0; s <= n - m; s++) {
    count++
      if (P.slice(0, m) === T.slice(s, s+ m)) {
        console.log('Wzorzec wystepuje z przesunieciem', s);
      }
  }
  console.log('Ilość porównań', count * m);
}

const T = '00111010101100'
// const T = '0001';
const P = '1100';
// powinno byc 12 * 4 = 48 porownania
// 3 poprawne przesuniecia: indeksy: 1, 5, 11
naiveStringMatcher(T, P);
