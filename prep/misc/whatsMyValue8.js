let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// What's my value? (Part 8)

// What will the following code log to the console and why? Don't run it until you have tried to answer.


// Cam's answer: 2 is logged to the console because (the value in) b is being passed as an argument to myFunction(). Within myFunction(), the parameter a is set to 2. console.log is invoked with a passed as an argument. Therefore, 2 is logged to the console.




// LS ANSWER: 

// Solution

// The code logs 2.
// Discussion

// This is another example of variable shadowing: The parameter a of myFunction shadows the variable a declared on line 1. The a we reference within the function body, on line 4, therefore refers to whatever argument is passed to the function, in our case the value of b, which is then logged.