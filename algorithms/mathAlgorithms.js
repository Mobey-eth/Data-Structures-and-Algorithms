/** Fibonacci sequence
 * Given a number n, find the first "n" elements of the Fibonacci sequence
 *
 * The first 2 numbers are [0,1]
 * the number "n" is a sum of the previous two elements of the Fibonacci sequence
 *
 * fibonacci(2) = [0,1]
 * fibonacci(3) = [0,1,1]
 * fibonacci(7) = [0,1,1,2,3,5,8]
 *
 * fibonacci(10) =[0,1,1,2,3,5,8,13,21,34]
 *
 */

// Mobi solution
const list = [0, 1];

const fibonacci = (n) => {
  for (let i = 2; i < n; i++) {
    // X you didn't start from 2 💀
    const last = list[list.length - 1]; // Array.lenght - 1 ma boi 💀
    const former = list[list.length - 2];
    const newNum = last + former;
    list.push(newNum);
  }
  console.log(list);
};

fibonacci(10);

// tutor solution

function fibonacciSolution(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSolution(10));
