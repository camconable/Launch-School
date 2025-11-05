// Question 1

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   num = 10;
// }

// myFunc();
// console.log(num);

// Cam's answer: This will log 10 to the console because outer scope
// variables are accessible from the inner scope. i.e. num is being
// reassigned to 10 from the inner scope

// LS ANSWER: This logs 10 to the console. The variable num declared and
//  initialized to 5 on line 1 is accessible within the scope of the myFunc
//  function. When that function is invoked, num is reassigned to 10.

// Question 2

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   console.log(num);
//   num = 10;
// }

// myFunc();
// console.log(num);

// Cam's answer: This logs 5 then 10 to the console. The variable
// num is declared and when myFunc function is invoked it has access to
// the outer scope and logs num to console (line 4).
// The invoked function then reassigns num to 10
// When the function ends, 10 is finally logged to the console (line 9).

// This first logs 5 to the console, and then logs 10 to the console.
// The variable num declared and initialized to 5 on line 1 is accessible
// within the scope of the myFunc function. When that function is invoked
// it first logs the value of num, which at this point in execution is 5,
// and then reassigns num to 10. The reassigned value is then logged on the
// last line of the code snippet.

// Question 3

// What will the following code log to the console and why? Don't run
// it until you have tried to answer.

// let num = 5;

// function myFunc() {
//   let num = 10;
// }

// myFunc();
// console.log(num);

// Cam's answer: This logs 5 to the console. Num is declared and assigned
// to 5 initially. When myFunc function is invoked, a variable of the same
// name (num) is declared and assigned. This inner scope variable shadows
// the outer scope with a value of 10 (line 4). When the function invocation
// ends, the inner scoped num does not exist outside of the block anymore.
// On the last line, the console logs the value of the global variable num,
// which was declared on line 1.

// This logs 5 to the console. The variable num is declared and initialized
// to 5 on line 1. When the function is executed, however, another variable
// called num is declared and initialized within the scope of the function.
// The key thing here is that line 4 is the initialization of a new variable
// rather than the reassignment of the variable from line 1.

// Question 4

// What will the following code log to the console and why? Don't run it
// until you have tried to answer.

// let num = 5;

// function myFunc() {
//   console.log(num);
//   let num = 10;
// }

// myFunc();
// console.log(num);

// Cam's answer: Initially, I want to say this logs 5 then 5 to the console.
// As in, console.log accesses the outer scoped num variable twice (line 4
// and line 9). The inner scoped num is declared on line 5 (and assigned to 10),
// then on line 6 it ceases to exist.

// But now I think it logs 10 to console, then 5. We expect the declaration
// of the inner scoped num to come before referencing it (as in, we should
// switch line 4 and 5).

// LS ANSWER: This won't log anything to the console. Instead, this code will
// raise a ReferenceError. The let declaration on line 5 creates a new num
//  variable within the scope of the body of the myFunc function. The
//  console.log on line 4
// is attempting to log the value of that num variable, not the one declared and
// initialized on line one. Since the variable hasn't been initialized yet
// however, we get a reference error:

// ReferenceError: Cannot access 'num' before initialization


// Question 5

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let num = 5;

// function myFunc(num) {
//   num = 10;
// }

// myFunc();
// console.log(num);

// Cam's answer: 5 will get logged to the console. the function declaration
// is expecting the num variable, but it is not defined. the invoked
// function does not change the outer scoped num variable, so console.log
// logs the original value of num to the console (declared on line 1)

// LS ANSWER: This logs 5 to the console. When the myFunc function is invoked,
// due to the function parameter num JavaScript creates a new variable
//  num within the scope of the function. This variable blocks access to the
//   variable of the same name declared and initialized in the global scope
//   on line 1. That variable cannot therefore be reassigned by the function
//   and so retains its initial value of 5, which is what is logged.

// Cam's synthesis: Cam is right but for the wrong reasons. The function
// parameter actually creates a new variable within the function scope.
// I think it's safe to say that the num variable within the function
// is shadowing the global num variable in lines 3 - 5.

// Question 6

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let num = 1;

// while (num < 3) {
//   num += 1;
// }

// console.log(num);

// Cam's answer: Only 3 is logged to the console. The while loop iterates twice.
// num is incremented twice. When num === 3, the while loop evaluates as false
// when it checks (3 < 3), then the value of num (3) is then logged to console.

// LS ANSWER: This logs 3 to the console. The block defined here by the curly
//braces works much in the same way as a function body when it comes to variable
// scope. The variable num declared and initialized on line 1 is incremented by
// 1 within the while loop on line 4 (this line essentially reassigns num to a
// new value, which is its current value added to 1). This happens twice,
// while num is less then 3 and so the condition for the while loop to
// execute is met. Once num reaches 3, the while loop no longer runs and
// so program execution continues to the console.log on line 7, which
// logs the reassigned value of num.

// Question 7

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let num = 1;

// while (num < 3) {
//   let num = 5;
//   num += 1;
// }

// console.log(num);

// Cam's answer: A rangeException error is logged because an
// infinite loop takes place.
// The infinite loop is caused by the while loop iterator never being
// incremented. On line 3, num remains at 1, so while (1 < 3) is
// evaluated ad infinitum. In the while block on line 4, a block variable
// num is declared and set to 5, then on the next line that block
// variable num is incremented to 6. On the second iteration, the global
// variable num is still 1, so (1 < 3) evaluates as true, then the block
// variable num is set to 5, increments to 6, and so on.

// LS ANSWER: This doesn't log anything to the console. This code results
//  in an infinite loop, which will eventually time out. Line 4 declares and
//   initializes a variable num to the number 5. This is a different variable
//    to the num declared and initialized to 1 on line 1, and exists within
//     the scope of the block defined by the curly braces; it is this num
//      that is incremented on line 5. The condition for the while loop,
//       however, references the num declared on line 1, not the one within
//        the scope of the block. The condition for ending the while loop
//         is therefore never met, resulting in an infinite loop.

// Cam's synthesis: Cam was right for the right reasons, but next time
// try to use precise language ('the ending condition is never met') :)

