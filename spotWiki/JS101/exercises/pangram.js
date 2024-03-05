/* eslint-disable max-len */
// A phrase or sentence containing all 26 letters of the alphabet (ideally repeating as few letters as possible). You may remember this one from typing class: "The quick brown fox jumped over the lazy sleeping dog," but Willard Espy came up with a shorter and more interesting one: "Bawds jog, flick quartz, vex nymphs." An abundance of pangrams, using some very obscure words or initials can be found here.

// - Exercise:

// Create a function that takes a string as an argument and returns a boolean value, true if the word is a pangram and false if it's not. For example:


// isPangram("The quick brown fox jumped over the lazy sleeping dog,"); //true
// isPangram('abcd'); //false
// isPangram("Bawds jog, flick quartz, vex nymphs."); //true

// input: string
// output: boolean, true if pangram
// pangram: contains all 26 letters of the alphabet

// define alphabet (string.split)
// convert string to stringArray
// loop through stringArray
//    if elem exists in alphabet
//      remove element stringArray and alphabet
// if alphabet length === 0 return true else return false

// function isPangram(string) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let stringArray = string.split('');
//   for (let idx = 0; idx < stringArray.length; idx += 0) {
//     if (alphabet.indexOf(stringArray[idx])) {
//       alphabet.splice(alphabet.indexOf(stringArray[idx]), 1);
//     }
//     stringArray.shift();
//   }
//   return alphabet.length === 0;
// }