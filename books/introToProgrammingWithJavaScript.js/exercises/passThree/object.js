/* eslint-disable max-len */
// // https://launchschool.com/books/javascript/read/objects

// Given the following code, how can you access the name of the person?

// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };


// Solution

// console.log(person.name);
// console.log(person['name']);

// Which of the following values are valid keys for an object?

//     1 => 
//     '1' => valid
//     undefined => 
//     'hello world' => valid
//     true => 
//     'true' => valid

// Solution

// **WRONG**
// All values are valid, as all are coerced into strings. The keys that are already strings will contain the same values, so there are repeats in this list; remember to stay consistent in how you define keys and do not repeat keys.

// Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

// // let myArray = {
// // };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// Solution
// let myArray = {
//   0: 'hello',
//   1: 'world',
//   2: 'foo',
//   length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }


// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// The order of the array does not matter.
// Solution

// console.log(Object.keys(obj).join('').toUpperCase().split(''));



// Create a new object named myObj that uses myProtoObj as its prototype.

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// Solution

// let myObj = Object.create(myProtoObj);

// for (let prop in myObj) {
//   console.log(`${prop}: ${myObj[prop]}`);
// }

// Which of the following values are primitive values? Which are objects? Which are neither?

//     "foo" => primitive
//     3.1415 => primitive
//     [ 'a', 'b', 'c' ] => obj
//     false => primitive
//     foo => obj **WRONG** => this is an identifier, so neither obj nor primitive
//     function bar() { return "bar"; } => obj
//     undefined => primitive
//     { a: 1, b: 2 } => obj

// Solution

// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

// Snippet 1

// myObj['qux'] = 3;

// let objKeys = Object.keys(myObj);

// console.log(`Snippet 1:`);

// objKeys.forEach(function(key) {
//   console.log(key);
// });

// Snippet 2

// console.log(`Snippet 2:`);
// for (let key in myObj) {
//   console.log(key);
// }

// Without running this code, can you determine whether these two snippets produce the same output? Why?

// Solution

// the foreach loop will only include properties defined on that object, excluding inherited properties. for...in loop will include all properties including inherited ones. So in this case, snippet 1 will only log qux to the console. snippet 2 will log foo, bar and qux to the console.

// Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// Solution

// input: object (to copy), array (of keys you want to copy)
// output: object, copied from 2 arguments specified above

// create empty object
// iterate through array arg
//   if elem is a objToCopy key
//     add key-val pair to new obj

// function copyObj(origObj, keyArr = Object.keys(origObj)) {
//   let newObj = {};
//   for (let key of keyArr) {
//     if (Object.keys(origObj).includes(key)) {
//       newObj[key] = origObj[key];
//     }
//   }
//   return newObj;
// }


// What does the following program log to the console? Why?

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

// console.log(foo.a);
// console.log(qux);

// Solution

// foo is a global scoped variable that contains the reference to an object. When bar is invoked on line 13, it is passed the reference to the object referenced by foo as an argument; So within the function bar on line 9, the value stored on the key a is mutated from 'hello' to 'hi'.

// qux is a global scoped variable that contains 'hello'. When bar is invoked, it is passed a copy of the value stored in qux - 'hello'. Within the function, the argument2 parameter is assigned to 'hello' then reassined to 'hi'. When the function ends, global variable qux remains the same because argument2 is function scoped.

// This example demonstrates function scoped parameters and pass by reference and pass by value, and the differences between reassignment and mutation.

// How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

// [1, 2, ["a", ["b", false]], null, {}]

// Primitives: 1, 2, 'a', 'b', false, null

// Objects:
// [1, 2, ["a", ["b", false]], null, {}]
// ["a", ["b", false]]
// ["b", false]
// {}


// Solution

// Write some code to replace the value 6 in the following object with 606:

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// You don't have to search the object. Just write an assignment that replaces the 6.
// Solution


// obj.bar[3].xyz = 606;
// obj['bar'][3]['xyz] = 606;

// Consider the following code:

// function foo(bar) {
//   console.log(bar, bar, bar);
// }

// let bar = foo;

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"

// As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code to work as intended.

// Solution

// Consider the following code:

// function foo(bar) {
//   console.log(bar());
// }

// foo(function() { return 'Welcome' });    // Should print 'Welcome'
// foo();    // Should print 3.1415
// foo();    // Should print [1, 2, 3]

// As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.
// Solution



// Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

// function hello(greeting, name) {
//   return greeting + ' ' + name;
// }

// function xyzzy() {
//   return { a: 1, b: 2, c: [3, 4, 5], d: {} };
// }

// const howdy = hello('Hi', 'Grace');
// let foo = xyzzy();

// Solution

// Variables: hello(), greeting, name, xyzzy(), howdy, foo

// Object property names: a, b, c, d, *MISSED ARRAY INDICES*

// Primitives: ' ', 'Hi', 'Grace', 1, 2, 3, 4, 5, *MISSED OBJ PROPERTY NAMES AND ARRAY INDICES*

// Objects: hello, xyzzy,
// { a: 1, b: 2, c: [3, 4, 5], d: {} },
// [3, 4, 5],
// {}

// Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

// function bar(arg1, arg2) {
//   let foo = 'Hello';
//   const qux = {
//     abc: [1, 2, 3, [4, 5, 6]],
//     def: null,
//     ghi: NaN,
//     jkl: foo,
//     mno: arg1,
//     pqr: arg2,
//   };

//   return qux;
// }

// let result = bar('Victor', 'Antonina');

// Note that some items in this program may appear in multiple categories.
// Solution

// Variables: bar, arg1, arg2, foo, qux, result

// Object property names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3, 0, 1, 2

// Primitives: 'Hello', abc, def, ghi, jkl, mno, pqr, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 0, 1, 2, null, NaN, 'Victor', 'Antonina'

// Objects: bar
// {
//   abc: [1, 2, 3, [4, 5, 6]],
//   def: null,
//   ghi: NaN,
//   jkl: foo,
//   mno: arg1,
//   pqr: arg2,
// }
// [1, 2, 3, [4, 5, 6]]
// [4, 5, 6]