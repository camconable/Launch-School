let rlSync = require('readline-sync')

// function factorial(num) {
//   let count = 1;
//   for (let i = num; i > 1; i -= 1) {
//     count *= i;
//   }
//   return count;
// }

// console.log(factorial(8));
let count = 1;

function factorialRecursion(num) {
  console.log(`num: ${num}`);
  if (num === 1) {
    return 1;
  }
  count = num * factorialRecursion(num-1);
  return count;
}

console.log(factorialRecursion(6));