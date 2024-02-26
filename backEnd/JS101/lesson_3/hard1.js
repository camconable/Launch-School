// Question 1

// Will the following functions return the same results?

// function first() {
//   return {
//     prop1: "hi there",
//   };
// }

// function second() {
//   return;
//   {
//     prop1: "hi there";
//   }
// }

// console.log(first());
// console.log(second());

// Try to answer without running the code or looking at the solution.

// No they won't return the same results. first() will instantiate and
// return an object with prop1. second() will immediately exit the function and
// be unable to instantiate, let alone return an object. the code to create
// the object in second() is unreachable.
// first() will return an object and second() will return undefined.

// LS answer:

// These functions do not return the same thing. The function first()
// returns the expected value of { prop1: "hi there" }, but second()
// returns undefined without throwing any errors.

// The reason for this odd behavior is that semicolons, in JavaScript,
// are technically optional. However, when you omit them, the JavaScript
// engine inserts them where it thinks you need them. In second, JavaScript
// inserts a semicolon after the word return, so the function returns undefined.
// No errors are thrown since the rest of the code is valid, even though it
// never gets executed.

// Some developers rely on this behavior and write JavaScript code without
// semicolons. However, most developers consider it poor practice since
// you're relying on the engine to make decisions for you, and those
// decisions may not be what you intended.


// Question 2

// What does the last line in the following code output?

// let object = { first: [1] }; // object variable contains reference to the object
// let numArray = object["first"]; // numArray = [1]
// numArray.push(2); // numArray = [1, 2]

// console.log(numArray); //  => "[1, 2]"
// console.log(object);  // { first: [1, 2] }

// Try to answer without running the code or looking at the solution.

// The last line outputs: { first: [1, 2] }
// The object is mutated, because numArray is assigned the reference to the
// array within the object; modifying this array will modify the object
// stored on both the object and numArray variables.

// Question 3

// Given the following similar sets of code, what will each code snippet print?

// A)

// function messWithVars(one, two, three) {
//   one = two;    // one = ['two']
//   two = three;  // two = ['three']
//   three = one;  // three = ['two']
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// 'one is: ['two']'
// 'two is: ['three']'
// 'three is: ['two']'

// Cam's revised answer based on running code:
// Block (function) scope is in effect here.
// the parameters are assigned those values within the function,
// but those parameters are block scoped and don't exist when the function
// ends. The code logs the output of the variables assigned on
// lines 7 - 9

// B)

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// 'one is ['two']
// 'two is ['three']
// 'three is ['one']

// WRONG

// C)

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// Question 4

// Can you identify all of the variables, primitive values,
// and objects in the following code?

// function boo(scare) {
//   let myBoo = scare.toUpperCase() + "!!!";
//   console.log(myBoo);
// }

// const halloweenCollection = {
//   greet: "Happy Halloween",
//   scare: "Boo",
//   wish: "May all your pumpkins be glowing",
// };

// let myBoo = boo(halloweenCollection["greet"]);

// VARIABLES
// boo (function), scare (parameter), myBoo (in boo()), myBoo (global)
// halloweenCollection

// PRIMITIVES: 12 total
// '!!!', 'HAPPY HALLOWEEN', 'HAPPY HALLOWEEN!!!',
// console.log(myBoo) => copy of string stored in myBoo is logged to console
// object properties: 'greet', 'scare', 'wish'
// object property values: 'Happy Halloween', 'Boo',
// 'May all your pumpkins be glowing',
// undefined, 'greet' (passed as arg on line 12)

// OBJECTS
// {} literal referenced by halloweenCollection, boo function object

// Question 5

// Ben was tasked to write a simple JavaScript function to
// determine whether an input string is an IP address using 4
// dot-separated numbers, e.g., 10.4.5.11. He is not familiar
// with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. It
// determines whether a string is a numeric string between 0 and
// 255 as required for IP numbers and asked Ben to use it. Here's
// the code that Ben wrote:

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length === 4) {
//     while (dotSeparatedWords.length > 0) {
//       let word = dotSeparatedWords.pop();
//       if (!isAnIpNumber(word)) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }
//   return false;
// }

// console.log(isDotSeparatedIpAddress('4.5.5'));
// console.log(isDotSeparatedIpAddress('10.10.10.10'));
// console.log(isDotSeparatedIpAddress('10.10.10.10.23'));

// Alyssa reviewed Ben's code and said, "It's a good start, but
// you missed a few things. You're not returning a false condition,
// and you're not handling the case when the input string has more
// or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those
// values should be invalid."

// Help Ben fix his code.