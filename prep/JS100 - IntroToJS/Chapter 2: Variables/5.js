// 5) Take a look at this code snippet:
// What does this program log to the console? Why?

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo);

// This logs 'bar' to the console. the foo variable declared in the block is block scoped and inaccessible outside of that block. The foo declared on line 1 has global scope and accessible anywhere in the program.
