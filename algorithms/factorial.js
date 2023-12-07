/**
 * Given an integer "n" ; required to find the factorial of that integer n
 *
 * factorial , denoted bu n! is a product of all positive integers less than or equal to that number n
 *
 * 4! = 4x3x2x1 = 24
 * 5! = 5x4x3x2x1 =120
 */

function factorial(n) {
  let nFactorial = 1;
  for (var i = 1; i <= n; i++) {
    // X you didn't inlude the "=" so you were one number short
    // solution started at "2", multiplying by 1 had no effect
    nFactorial = i * nFactorial;
  }
  return nFactorial;
}
console.log(factorial(5));

// solution
function factorialSolution(n) {
  let result = 1;
  for (var i = 2; i <= n; i++) {
    result = i * result;
  }
  return result;
}
console.log(factorialSolution(5));
