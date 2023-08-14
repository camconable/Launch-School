// 6) Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

// Examples

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// f(0) = 0
// f(1) = 1
// for all n >= 2:
// f(n) = f(n-1) + f(n-2);

// function factorialR(n) {
//   if (n === 1) {
//     return 1;
//   } else if (n >= 2) {
//     return (n * factorialR(n-1));
//   } else {
//     console.log('error');
//   }
// }

// console.log(factorialR(1));
// console.log(factorialR(2));
// console.log(factorialR(3));
// console.log(factorialR(4));
// console.log(factorialR(5));
// console.log(factorialR(6));
// console.log(factorialR(7));
// console.log(factorialR(8));