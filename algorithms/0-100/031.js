const meta = {
  link: 'https://www.codewars.com/kata/prime-streaming-pg-13/train/javascript',
  name: 'Prime Streaming (PG-13)',
  tags: ['prime numbers']
};

class Primes {
  *stream() {
    yield 2; // only even number that is prime
    for (let x = 3; ; x+=2) {
      if (this.isPrime(x)) yield x;
    }
  }

  isPrime(num) {
    if (!(num & 1)) return false; // if can be divided by two, its not a prime
    const maxDivider = Math.abs(Math.sqrt(num)); // max value used to to divide num
    for (let x = 3; x <= maxDivider; x+=2) {
      if (!(num % x)) return false;
    }
    return true;
  }
}
