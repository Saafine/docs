function permutation(str: string, prefix = '') {
  if (str.length === 0) {
    console.log(prefix); // this line takes O(n) time since each character needs to be printed
  } else {
    for (let i = 0; i < str.length; i++) {
        // These 2 lines will also take  O(n) time combined, due to the string concatenation
        const remainder = str.substring(0, i) + str.substring(i + 1);
        permutation(remainder, prefix + str.charAt(i));
    }
  }
}

describe('runner', () => {
  it('should run', () => {
    permutation('abc')
  })
})
