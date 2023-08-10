// 1) Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

// console.log('My name is Cam ' + 'Conable');

// 2) Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

// let num = 4936;
// console.log(`Full number: ${num}`);


// let ones = num % 10;
// num = (num - ones) / 10;
// let tens = num % 10;
// num = (num - tens) / 10;
// let hundreds = num % 10;
// num = (num - hundreds) / 10;
// let thousands = num % 10;

// console.log(`Thousands place: ${thousands}`);
// console.log(`Hundreds place: ${hundreds}`);
// console.log(`Tens place: ${tens}`);
// console.log(`Ones place: ${ones}`);

// 3) Identify the data type for each of the following values:

// 'true' => string
// false => boolean
// 1.5 => floating decimal point number (technically just a number)
// 2 => number
// undefined => undefined
// { foo: 'bar' } => object

// 4) Explain why this code logs '510' instead of 15.

// console.log('5' + 10);

// Cam's answer: JavaScript implicitly coerces the number 10 to a string, then concatenates the two strings. It always does this when there is a + operator with a string operand.

// 5) Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

// console.log(Number('5') + 10);

// 6) Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

// The value of 5 + 10 is 15.

// console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 7) Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

// let foo = ['a', 'b', 'c'];
// console.log(foo.length);  // => 3
// console.log(foo[3]);      // will this result in an error?

// The last line will not result in an error, but instead return undefined. It's accessing a location in memory that hasn't been defined. JavaScript has no reason to throw an error or halt the program.

// 8) Create an array named names that contains a list of pet names. For instance:

// let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// 9) Create an object named pets that contains a list of pet names and the type of animal. For instance:

// let pets = {
//   asta: dog,
//   butterscotch: cat,
//   pudding: cat,
//   neptune: fish,
//   darwin: lizard
// };

// above is incorrect. Each key's values have to be wrapped in quotes since they're strings

// 10) What value does the following expression evaluate to?

// 'foo' === 'Foo'

// Evaluates to false because the strings do not precisely match. They are the same type (string) but not the same value. Strict equality operator dictates each operand must be the same type and value.

// 11) What value does the following expression evaluate to?

// parseInt('3.1415')

// evaluates to the whole number: 3. parseInt stops evaluating and ignores the rest of the string after it encounters an invalid character (.). To convert the entire string to a  floating point number use parseFloat() method

// 12) What value does the following expression evaluate to?

// '12' < '9'

// it evaluates to true because when comparing strings it compares character by character, left to right. It compares '1' < '9' which evaluates to true. This is the only comparison evaluated since there is no character to the right of '9' (to compare '2' to, in the next iteration, for example; if there were, it would compare the them then return the boolean result of that comparison).

