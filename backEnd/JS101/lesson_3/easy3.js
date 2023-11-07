// Question 1

// Write three different ways to remove all of the elements from the following array:

// let numbers = [1, 2, 3, 4];
// const iterator = numbers.keys();
// console.log(numbers);

// method 1: while loop and shift()
// while (numbers.length) {
//   numbers.shift();
// }

// method 2 set length to 0
// numbers.length = 0;

// method 3 splice
// numbers.splice(0);

// console.log(numbers);


// Question 2

// What will the following code output?

// console.log([1, 2, 3] + [4, 5]);

// it will log '12345' because the arrays are implicitly coerced into strings

// LS answer: Close but no. the first array is coerced into string '1,2,3'
// the second array is coerced into string '4,5'. These strings are then
// concatenated together into '1,2,34,5'.
// In JavaScript, the + operator first converts the arrays to strings,
// and then concatenates the strings, so the output is the string 1,2,34,5.

// Try to answer without running the code.
// Question 3

// What will the following code output?

// let str1 = "hello there";
// let str2 = str1;    // str2 is assigned the primitive 'hello there'
// str2 = "goodbye!";  // str2 reassigned 'goodbye'
// console.log(str1);  // str1 never gets reassigned, remains 'hello there'

// 'hello there' is logged to console.

// Try to answer without running the code.
// Question 4

// What will the following code output?

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice(); // effectively the same as let arr2 = arr1; slice() is shallow copy
// arr2[0].first = 42;      // both arr2 and arr1 are mutated since they point to the same object
// console.log(arr1);       //

// [{ first: "42" }, { second: "value2" }, 3, 4, 5] is logged to console
// both arr1 and arr2 contain the same reference to the same object, which
// was mutated in line 3

// A deep copy makes a duplicate of every item in an existing array or object.
// In particular, it creates completely new instances of any subarrays or
// subobjects in the source object. If we performed a deep copy on arr1,
// we would have two different arrays as well as four separate objects.

// A shallow copy only makes a duplicate of
// the outermost values in an array or object.

// Try to answer without running the code.

// Question 5

// The following function unnecessarily uses two return statements to return boolean values. Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// Try to come up with at least two different solutions.

// SOLUTION 1:

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// SOLUTION 2:

// const isColorValidTwo = (color) => color === "blue" || color === "green";

// console.log(isColorValid('blue'));
// console.log(isColorValid('yellow'));
// console.log(isColorValid('green'));
// console.log(isColorValidTwo('blue'));
// console.log(isColorValidTwo('yellow'));
// console.log(isColorValidTwo('green'));

// Question 6

// Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr;       // shallow copy pointer of arr to newArr

const num = arr[0];     // const num is set to primitive 1
let newNum = num;       // newNum is set to primitive 1

function double(num){   // num is set to 1
  return num * 2;       // (1 * 2) is evaluated, 2 is returned 
}

double(newNum);         // primitive 1 is passed as an argument to double
// 2 is returned from the function, but not assigned to anything nor logged

// VARIABLES

// global:
// arr, newArr, num, newNum, double

// local:
// num (inside function scope of double)

// PRIMITIVES
// numbers 1, 2, 3 within array
// (global) num is set to a primitive

// (local) primitive 2 exists within an expression in double function

// OBJECTS
// [1, 2, 3] assigned to arr
// the shallow copy of [1, 2, 3] assigned to newArr


// LS ANSWER:

// VARIABLES
// I got all 6 variables

// PRIMITIVES I MISSED
// number 0 is used to access the element; this counts as a primitive
// On the next line, newNum is assigned yet another copy of the number 1
// Finally, on the last line, double is invoked with the value of newNum
// being passed as an argument. Remember that primitives are passed by value?
// This means that the parameter num receives a copy of the number 1. The
// function then returns the product of 1 * 2, which is the number 2.

// OBJECTS
// I got all 2 objects