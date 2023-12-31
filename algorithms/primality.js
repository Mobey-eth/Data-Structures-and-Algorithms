/**
 * Prime Number
 * Give  a natural number "n" , determine if the number is prime or not
 *
 * a prime number is a natural number > 1 that is not a product of two smaller numbers.
 *
 *
 * isPrime(5) = true(1*5 or 5*1)
 * isPrime(4) = false(1*4 or 2*2 or 4*1)
 *
 */

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(19));
