let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// What's my value? (Part 7)

// What will the following code log to the console and why? Don't run it until you have tried to answer.

// Cam's answer: This will log 1 to the console. There is no let statement in the inner function block, so we will not see a ReferenceError (like in whatsMyValue5.js). Due to this, the function will successfully access the globally scoped variable a (with value of 1). 

// If there were a let statement (for variable a) in the function, that would shadow the a on line 1. And if we tried to do something with that variable before it was declared in the function, the program would likely throw a ReferenceError or other errors. Luckily that is not the case.




// LS ANSWER: 

// Solution

// The code logs 1.
// Discussion

// The variable a declared in the let statement on line 1 is declared at the very top level of our code, so it is accessible from everywhere in the code, including from within the body of myFunction.