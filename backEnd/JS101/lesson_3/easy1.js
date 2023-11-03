// Question 1

// Will the code below raise an error?

// let numbers = [1, 2, 3];
// numbers[6] = 5;

// This code will not raise an error. It will assign the element at index 6
// of the numbers array to the value of 5. numbers[3], numbers[4], numbers[5]
// will all be undefined if they are accessed. The elements between
// numbers[2] and numbers[6] will all be initialized and set to undefined.

// Bonus:

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];  // what will this line return?

// numbers[4] will return undefined

// LS answer: It doesn't raise an error. The JavaScript engine will treat
// array slots 3 through 5 as empty slots.

// Bonus Answer:

// numbers[4] will output undefined, but the slot is empty -- it doesn't
// have a value, not even undefined, in spite of what the line returns.
// This distinction is important: if you use map(), for instance, the
// new array will also have empty slots in the corresponding positions.
// On the other hand, slots with a value of undefined will be remapped
// based on the return value of the callback:

// Cam's synthesis: empty slots are different than undefined. Undefined
// is a value and the empty slots aren't even assigned that, initially.
// The array slots 3 - 5 are empty and contain nothing; not null, not undefined.


// Question 2

// How can you determine whether a given string ends
// with an exclamation mark (!)?

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// function ifExclamationLast(str) {
//   return str.endsWith('!');
// }

// function ifExclamationLastTwo(str) {
//   return str.indexOf('!') === str.length - 1;
// }

// function ifExclamationLastThree(str) {
//   return str.slice(str.length - 1) === '!';
// }

// console.log(ifExclamationLast(str1));
// console.log(ifExclamationLast(str2));

// console.log(ifExclamationLastTwo(str1));
// console.log(ifExclamationLastTwo(str2));

// console.log(ifExclamationLastThree(str1));
// console.log(ifExclamationLastThree(str2));

// Question 3

// Determine whether the following object of people
// and their age contains an entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// Note that our keys have capitalized names; this usually
// violates style guidelines, but is fine for our purposes. We'll
// use such keys in several exercises in this course.

// console.log(Object.keys(ages).includes('Spot'));
// console.log(ages.hasOwnProperty('Spot'));

// Question 4

// Using the following string, create a new string that contains
// all lowercase letters except for the first character, which should
// be capitalized. (See the example output.)

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// let newString = munstersDescription[0].toUpperCase()
// + munstersDescription.slice(1).toLowerCase();

// LS answer:

// let newStringTwo = munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase();

// console.log(newString);
// console.log(newStringTwo);

// Question 5

// What will the following code output?

// console.log(false == '0');    // => true
// console.log(false === '0');   // => false

// Question 6

// We have most of the Munster family in our ages object:

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

// let additionalAges = { Marilyn: 22, Spot: 237 };

// console.log(Object.assign(ages, additionalAges));

// Question 7

// Determine whether the name Dino appears in the strings
// below -- check each string separately:

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// Question 8

// How can we add the family pet, "Dino", to the following array?

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push('Dino');

// console.log(flintstones);

// Question 9

// In the previous problem, our first answer added 'Dino' to the array like this:

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');

// console.log(flintstones);

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

// Question 10

// Return a new version of this sentence that ends just
// before the word house. Don't worry about spaces or punctuation:
// remove everything starting from the beginning of house to
// the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(`--${advice.substring(0, advice.indexOf('house'))}--`);

// // Expected return value:
// // => 'Few things in life are as important as '