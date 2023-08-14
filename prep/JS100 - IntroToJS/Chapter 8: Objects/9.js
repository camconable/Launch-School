// 9) What does the following program log to the console? Why?

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);
// describe what above does
// passes foo (obj) to bar function, which reassigns foo.a to 'hi'

// passes qux (variable) to bar function, which reassigns qux to 'hi' - WRONG
// argument 2 is block scoped so qux is set to 'hi' only within the block - WRONG AGAIN
// 

// console.log(foo.a); //outputs 'hi'

// console.log(qux); //outputs 'hi' - WRONG - bar func does not change qux var in global scope
