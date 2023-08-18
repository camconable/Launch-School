// What's my value? (Part 5)

// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    // let a = 2;
    // console.log(a);
  }
}

myFunction();

// Here is what's logged to the console:

// 1
// 2

// 1 is logged because a is previously declared and accessible from the outer scope. 2 is then logged because the inner-scoped variable - a - is declared and initialized, and the inner a shadows variable a from the outer scope.



// LS ANSWER: 

// Solution

// ReferenceError: Cannot access 'a' before initialization

// Discussion

// Your initial hunch might have been that this code should output the numbers 1 (on line 5) and 2 (on line 7). The reason that doesn't happen is that variables declared by let aren't available until the code runs. Therefore, the let statement on line 6 creates a new variable a that isn't available on line 5. Since we try to log a before assigning it a value, a ReferenceError is raised.

// Technically, the scope of a is the entire block. JavaScript does hoist the variables defined by let, but, when it does, it creates a "temporal dead zone" in which the variable exists but doesn't have a value -- not even a value of undefined. We talk more about the temporal dead zone in a later course.

// Note that the variable a defined on line 6 shadows the variable a defined on line 2.



// Cam's synthesis: 

// There is a priority issue going on here: on the innermost level, variables declared with let shadow the previously declared variable and take precedence in the ENTIRE block; if we try to access them before they're declared it will throw an error REGARDLESS of whether the variable was previously declared/assigned a value in an outer block.

// JavaScript won't "fall back" to the value of the previously declared variable. It will always attempt to access the shadowed variable referenced elsewhere in the block.