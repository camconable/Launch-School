/* eslint-disable max-len */
// https://launchschool.com/books/javascript/read/variables
// Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

// $ node greeter.js
// Good Morning, Victor.
// Good Afternoon, Victor.
// Good Evening, Victor.

// Solution
// greeter();

// function greeter() {
//   let name = 'Victor';
//   console.log(`Good Morning, ${name}.`);
//   console.log(`Good Afternoon, ${name}.`);
//   console.log(`Good Evening, ${name}.`);
// }


// Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

// You are 20 years old.
// In 10 years, you will be 30 years old.
// In 20 years, you will be 40 years old.
// In 30 years, you will be 50 years old.
// In 40 years, you will be 60 years old.

// Solution
age();

function age() {
  let userAge = 20;
  console.log(`You are ${userAge} years old.`);
  for (let idx = 10; idx <= 40; idx += 10) {
    console.log(`In ${idx} years, you will be ${userAge + idx} years old.`);
  }
}

// What happens when you run the following program? Why do we get that result?

// {
//   let foo = 'bar';
// }

// console.log(foo);

// Solution

// You will get an intialization error: variable is not declared. This is because the rules of variable scope; foo is out of scope after the block ends. declaring variables with let gives the variable block scope.

// What happens when you run the following code? Why?

// const NAME = 'Victor';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// Solution

// The program will log the following, then throw a TypeError and halt execution

// 'Good Morning, Victor'
// 'Good Afternoon, Victor'
// 'Good Evening, Victor'

// TypeError

// This is because the interpreter is attempt an illegal operation, which is reassigning a variable declared with const. This TypeError is thrown then the program halts execution up to that point.

// Take a look at this code snippet:

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo);

// What does this program log to the console? Why?
// Solution

// The program logs 'bar' to the console. The program first declares a global variable foo and initializes it to the string 'bar', then within a block initializes a local variable foo and assigns it 'qux'. While in the block, the variable foo shadows (prevents access to) the outside global variable foo. After the block ends, the local variable foo is out of scope and inaccessible. On line 6 the console only has access to the global variable foo, containing 'bar'



// Will this program produce an error when run? Why or why not?

// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }

// console.log(FOO);

// No error. The program will log 'bar' to the console. This is the exact same concept as the previous question. Two variables are initialized at two different levels: the global scope and local scope. They are initialized using the const keyword, making them constants; that, however, does not change the underlying mechanisms at play. They are still two different variables. Between lines 2 - 4, the inner local scoped FOO shadows the outer, global scoped FOO. After line 4 the inner FOO goes out of scope and is inaccessible, therefore logging the global FOO constant 'bar' to the console on line 6.