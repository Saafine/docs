// Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");

function DNAStrand(dna) {
  const pairs = {
    A: 'T',
    G: 'C'
  };
  const dnaMap = Object.keys(pairs).reduce((acc, key) => {
    return {
      ...acc,
      [key]: pairs[key],
      [pairs[key]]: key
    };
  }, {});
  return Array.from(dna).map(key => dnaMap[key]).join('');
}

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript
// var a = DNAStrand('AAAA')
// console.log(a);
//
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }
//
// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }
