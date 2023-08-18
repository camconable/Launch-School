
// What's my value? (Part 1)

// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

// it will throw an error to the console similar to this: "greeting is not initialized"

// LS answer: Solution

// The code logs undefined.
// Discussion

// All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:

// var greeting;

// console.log(greeting);

// greeting = 'Hello world!'

// When a var variable is declared but not assigned a value, like on line 1, it is initialized to the value undefined. For that reason, the code logs undefined to the console.