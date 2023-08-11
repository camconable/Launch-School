// 1) Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

// let myName = 'Victor';

// console.log(`Good Morning, ${myName}.`);
// console.log(`Good Afternoon, ${myName}.`);
// console.log(`Good Evening, ${myName}.`);

// 2) Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

// let myAge = 94;

// console.log(`In 10 years, you will be ${myAge + 10} years old.`);
// console.log(`In 20 years, you will be ${myAge + 20} years old.`);
// console.log(`In 30 years, you will be ${myAge + 30} years old.`);
// console.log(`In 40 years, you will be ${myAge + 40} years old.`);


// 3) What happens when you run the following program? Why do we get that result?

// {
//   let foo = 'bar';
// }

// console.log(foo);

// foo is block scoped and inaccessible outside of the block. Globally, foo has not been declared.

// 4) What happens when you run the following code? Why?

// const NAME = 'Victor';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// NAME = 'Joe';
// console.log('Good Morning, ' + NAME);
// console.log('Good Afternoon, ' + NAME);
// console.log('Good Evening, ' + NAME);

// constants cannot be reassigned. The first 4 lines are valid, but once you attempt to reassign NAME to a new string you will get an error and the program will halt. The last 3 lines won't be run since the program halted on line 6.

// 5) Take a look at this code snippet:
// What does this program log to the console? Why?

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo);

// This logs 'bar' to the console. the foo variable declared in the block is block scoped and inaccessible outside of that block. The foo declared on line 1 has global scope and accessible anywhere in the program.

// 6) Will this program produce an error when run? Why or why not?

// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }

// console.log(FOO);

// no error is produced. the const declared in the block on line 3 shadows the const declared on line 1, but goes out of scope on line 4. 'bar' is logged to the console.