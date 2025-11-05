// Question 1

// Given a string, return a new string that replaces every
// occurrence of the word "important" with "urgent":

// let advice = "Few things in life are as important as house training your pet dinosaur. important";

// const regex = /important/g;

// console.log(advice.replace(regex, 'urgent'));

// Question 2

// The Array.prototype.reverse method reverses the order of elements
// in an array, and Array.prototype.sort can rearrange the elements in
// a variety of ways, including descending. Both of these methods mutate
// the original array as shown below. Write two distinct ways of reversing
// the array without mutating the original array. Use reverse for the first
// solution, and sort for the second.

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// console.log(numbers.slice().reverse());

// console.log(numbers);

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// console.log([...numbers].sort((a, b) => b - a));

// console.log(numbers);

// Bonus Question: Can you do it using the Array.prototype.forEach() method?

// let reversedArray = [];

// numbers.forEach((element) => {
//   reversedArray.unshift(element);
// });

// console.log(reversedArray);
// console.log(numbers);

// Question 3

// Given a number and an array, determine whether
// the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// function inArray(num, array) {
//   return array.includes(num);
// }

// console.log(inArray(number1, numbers));
// console.log(inArray(number2, numbers));

// Question 4

// Starting with the string:

// let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

// let fullSentence = 'Four score and ' + famousWords;
// console.log(fullSentence);
// console.log('Four score and '.concat(famousWords));

// Question 5

// Given an array of numbers [1, 2, 3, 4, 5], mutate
// the array by removing the number at index 2,
// so that the array becomes [1, 2, 4, 5].

// let numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 1);

// Question 6

// Suppose we build an array like this:

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript
// and programming in general. We'll explore this in much greater
// depth in a future Lesson.

// Create a new array that contains all of the above values,
// but in an un-nested format:

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// let flintstones = ["Fred", "Wilma"];
// const allTheFlintstones = [...flintstones, 'Barney', 'Betty', 'Bambam', 'Pebbles'];

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// flintstones = flintstones.reduce((a, cV) => {
//   return a.concat(cV);
// }, []);

// let myFlintstones = [];
// flintstones.forEach((elem) => {
//   myFlintstones = myFlintstones.concat(elem);
// });

// Question 7

// Consider the following object:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2,
  // Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements:
// Barney's name and Barney's number:

// let barneyArray = [];
// for (const [key, value] of Object.entries(flintstones)) {
//   if (key === 'Barney') {
//     barneyArray.push(key, value);
//   }
// }

// console.log(barneyArray);

// [ 'Barney', 2 ]

// Question 8

// How would you check whether the objects assigned
// to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));
// console.log(Array.isArray([]));

// Question 9

// Back in the stone age (before CSS), we used spaces to
// align things on the screen. If we have a 40-character wide
// table of Flintstone family members, how can we center the following
// title above the table with spaces?

// let title = "Flintstone Family Members";
// 40-25 = 15 / 2 = 7.5 on each side
// console.log(Math.floor((40 - title.length) / 2));

// console.log(title.padStart(
//   Math.floor((40 - title.length) / 2) + title.length)
// );

// Question 10

// Write a one-line expression to count the number of
// lower-case t characters in each of the following strings:

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// let statement1TCount = Array.from(statement1).filter((elem) => elem === 't').length;
// let statement2TCount = statement2.split('').filter(elem => elem === 't').length;
// console.log(statement1TCount);
// console.log(statement2TCount);