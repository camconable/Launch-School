// What's my value? (Part 2)

// What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);

let greeting = 'Hello world!';

// it will throw an error to the console similar to this: "greeting is not initialized". variables declared with let are not hoisted or moved to the beginning of the scope, like var

// LS ANSWER:

// Solution

// ReferenceError: Cannot access 'greeting' before initialization

// Discussion

// In contrast to var variables, let variables are not accessible before they are declared. For that reason the above code raises an error.