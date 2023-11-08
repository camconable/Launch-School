// Question 1

// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...

// let flintstones = 'The Flintstones Rock!';

// for (let idx = 0; idx < 10; idx += 1) {
//   let padding = ''.padStart(idx, ' ');
//   console.log(`${flintstones.padStart(flintstones.length + padding.length, padding)}`);
// }

// Question 2

// Starting with the string:

// let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

// let str = munstersDescription.split('');

// str.forEach((elem, idx) => {
//   if (elem === elem.toLowerCase()) {
//     str[idx] = elem.toUpperCase();
//   } else if (elem === elem.toUpperCase()) {
//     str[idx] = elem.toLowerCase();
//     console.log(elem);
//   }
// });

// console.log(str.join(''));

// Question 3

// Alan wrote the following function, which was intended
// to return all of the factors of number:

// function factors(number) {
//   if (number <= 0) {
//     return 'Provided number is less than 0, please enter a new number';
//   }
//   let factors = [];
//   for (let divisor = number; divisor >= 0; divisor -= 1) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//   }
//   return factors;
// }

// Alyssa noticed that this code would fail when the input is 0 or
// a negative number, and asked Alan to change the loop. How can he
// make this work without using a do/while loop? Note that we're not
// looking to find the factors for 0 or negative numbers, but we want
// to handle it gracefully instead of raising an
// exception or going into an infinite loop.

// console.log(factors(-15));
// console.log(factors(15));
// console.log(factors(0));
// console.log(factors(45));

// Bonus: What is the purpose of number % divisor === 0 in that code?

// The purpose is to check if remainders exist for the provided number divided
// by the current divisor. If no remainders exist you know that the current
// divisor can be divided evenly into the number

// Question 4

// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer. However,
// once the buffer becomes full, any new elements will displace the
// oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to
// the buffer. In presenting the code to her team leader, she said
// "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than
// the method she used to add an element to the buffer? You may assume
// that newElement will always be a primitive value.

// Yes there is a difference between these implementations. In
// addToRollingBuffer1, the reference to the original buffer
// array is mutated on line 2. A side
// effect is occurring because the function is mutating the array.
// It also returns the reference to buffer. The function should
// do only one of these things.

// In addToRollingBuffer2, .concat is passing newElement as an argument
// and assigning the reference to this new array to the buffer
// variable. addToRollingBuffer2 then returns buffer (the reference to the new
// array). This is the more desirable implementation, because although
// both implementations produce the same result, the mutation of buffer
// in line 2 is making a mutation outside of the scope of the function,
// and it appears that Alyssa does not recognize that.

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// Question 5

// What will the following two lines of code output?

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// Don't look at the solution before you answer.

// .9
// '.3false'

// Answer:
// 0.8999999999999999
// false

// Question 6

// What do you think the following code will output?

// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// false
// NaN is not equal to itself

// Bonus:

// How can you reliably test if a value is NaN?

// Number.isNaN(Number(value));

// Question 7

// What is the output of the following code?

// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

// 34 is logged to console

// newAnswer is assigned the primitive 50, but it's not used
// or logged. The result of the expression answer - 8 (42 - 8)
// is logged to console

// Question 8

// One day, Spot was playing with the Munster family's home computer,
// and he wrote a small program to mess with their demographic data:

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// After writing this function, he typed the following code:

// messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with
// his tail. Did the family's data get ransacked? Why or why not?

// The data did not get ransacked because the Object.values method
// returns the property values of each of the object's keys
// If this line was replaced with Object.keys() then they would be
// in trouble

// REVISED ANSWER: It doesn't matter that Object.values grabs the property
// values of the object rather than the keys, it is still iterating over the
// keys, and accessing and modifying them. On line 11 and 12 it the
// messWithDemographics can is accessing the keys and mutating the values.

// LS ANSWER: Spot will find himself in the "dog house" for this one.
// The family's data is in shambles now.

// Why? In JavaScript, objects are passed by reference. Thus, Spot's
// demoObject starts off pointing to the munsters object. His program
// could replace that with some other object, and the family's data would
// be safe. However, in this case, the program doesn't create a copy of
// the demoObject; it just uses it, as-is. To further complicate matters,
// the objects nested in the demoObject are the same objects referenced by
// the munsters object properties. Therefore, when the forEach loop mutates
// those objects, the change is reflected by both pointers, munsters and
// demoObject. Ultimately, the object that gets changed by the function is
// the munsters object.


// Question 9

// Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// What does the following code output?

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// Question 10

// Consider these two simple functions:

// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// What will the following function invocation return?

// bar(foo());