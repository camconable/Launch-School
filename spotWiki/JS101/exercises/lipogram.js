/* eslint-disable max-len */
// A written work composed of words chosen to avoid the use of one or more letters. You may hail F. Scott Fitzgerald's Gatsby as great, but in 1939 Ernest Vincent Wright produced the phenomenal Gadsby: A Story of Over 50,000 Words Without Using the letter "E," a scarcely believable achievement considering that "E" is the most common letter in English. Imagine an entire novel without he, she, the, or the past tense marker —ed.

// - exercise:

// Create a function that takes two strings as  arguments and return a boolean value if the first string contains all of the letters of alphabet except the one that is the second argument. For example:


// isLipogram('abcdefghijklmnopqrstuvwxy', 'z'); //true
// isLipogram('abc', 'd'); //false

// input: 2 strings
// eslint-disable-next-line no-trailing-spaces
// output: boolean, true if lipogram
// lipogram: first string contains all letters of alphabet except the one in the second string

// needs to contain all letters of alphabet
// string1 cannot contain letter in string2

// define alphabet
// remove letter (string2) from alphabet
// convert string1 to array1
// if chars in array1 appear at least once in modifiedAlphabet, return true
//   loop through array1, remove char from modifiedAlphabet
//     if alphabet includes elem, remove (splice) elem from alphabet
//   if modifiedAlphabet is empty then return true, else return false

// function isLipogram(string1, string2) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   alphabet.splice(alphabet.indexOf(string2), 1);
//   let array1 = string1.split('');
//   array1.forEach((elem) => {
//     if (alphabet.includes(elem)) {
//       alphabet.splice(alphabet.indexOf(elem), 1);
//     }
//   });
//   return alphabet.join('') === '';
// }