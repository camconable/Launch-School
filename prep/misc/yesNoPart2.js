// The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.

// Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

let randomNumber = Math.round(Math.random());

console.log(`Random number is: ${randomNumber}`);

randomNumber ? console.log(`Yes!`) : console.log(`No.`)