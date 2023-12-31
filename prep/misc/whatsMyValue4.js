// What's my value? (Part 4)

// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// 1 will be logged to the console. variable a is scoped to myFunction() and accessible to everything within it, including the if block, which calls console.log(a).






// LS ANSWER

// Solution

// The code logs 1.
// Discussion

// Variables declared in an outer scope can be accessed in any inner scope. In our case, the variable a is declared in the function definition and then accessed in the body of the if statement. For that reason, line 4 logs the value 1 when myFunction is invoked.

