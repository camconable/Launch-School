// 1) What does this code log to the console? Does executing the foo function affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

// Cam's answer: This logs 1 to the console because bar within the function is block scoped. It is defined on line 3, but then ceases to exist after the function runs. It briefly shadows the global bar variable, but after the function completes the global bar variable is in effect.
