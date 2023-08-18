const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// What's my value? (Part 9)

// What will the following code log to the console and why? Don't run it until you have tried to answer.


// Cam's answer: My initial thought was that we would get a TypeError ('invalid assignment to const x'), but now I think the program would throw a ReferenceError. The error would be thrown on line 4 because myFunction did not declare variable a. Within the block, because a is being reassigned, the program then looks for declaration and throws an error if it doesn't exist.


// LS ANSWER:

// Solution

// TypeError: Assignment to constant variable.

// Discussion

// Variables declared by const are block scoped, similar to variables declared by let, but their value cannot be changed through re-assignment. So when we try to re-assign a to a new value on line 4, we get an error.

// Note that passing a as an argument to myFunction on line 7 has no effect, as the function does not declare any parameters. It is an excess argument that is simply ignored in the function body.