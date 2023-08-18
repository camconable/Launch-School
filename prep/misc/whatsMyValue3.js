// What's my value? (Part 3)

// What will the following code log to the console and why? Don't run it until you have tried to answer.

if (true) {
  let myValue = 20;
}

console.log(myValue);

// Nothing will be logged to the console because myValue is not accessible outside of the if block. The if statement runs successfully and myValue is declared, but it ceases to exist in the global scope once the block on line 3 ends.

// almost correct, but not precisely right. an error will be thrown, specifically a ReferenceError is raised because console.log tries to access a variable that is not accessible

// LS ANSWER:

// Solution

// ReferenceError: myValue is not defined

// Discussion

// Variables declared with let are block scoped. This means that when we declare the variable myValue within a block on line 2, that variable is not accessible outside of the block on line 5, and a ReferenceError is raised.