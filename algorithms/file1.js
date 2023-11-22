// REQUIRED TO FIND THE BIG O NOTATION OF AN :
//  algo to find the summation of n numbers

function summation(n) {
  let result = 0; // main statement
  for (let i = 1; i <= n; i++) {
    result += i; // main statement
  }
  return result; // main statement
}

console.log(summation(10));
