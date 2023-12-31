let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// What's my value? (Part 6)

// What will the following code log to the console and why? Don't run it until you have tried to answer.


// false will be logged to the console. the value true is stored in b on line 5, but the scope (and shadow value) ends on line 6. Line 8 logs the globally scoped b value of false.




// LS ANSWER:

// Solution

// The code logs false.
// Discussion

// The situation is similar to that of the previous exercise: The variable b declared on line 2 and the variable b declared on line 5 in the body of the if statement have the same name, but they are two different variables. Important to note is that the b that we reference on line 8 refers to the variable declared on line 2. This is because the scope of b declared on line 5 is the body of the if statement, and it is not accessible in any outer scope.