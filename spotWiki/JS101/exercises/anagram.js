// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Excercises:
// Create a function that takes two strings as arguments and returns a boolean value of two words are anagrams and false if they are not anagrams. For example:


console.log(isAnagram('aba', 'aab')); // true
console.log(isAnagram('aba', 'aa')); //false

console.log(isAnagram('cameron', 'noremac')); // true


// input: 2 strings
// output: boolean value checking if anagram
// anagram: 1 to 1 comparison of the characters in both strings/
//   they appear in each string exactly once

// convert both strings to arrays and sort
// loop through string length
//   in loop: if character does not match return false
// end of loop return true

function isAnagram(string1, string2) {
  let sortedArray1 = string1.split('').sort();
  let sortedArray2 = string2.split('').sort();

  for (let idx = 0; idx < sortedArray1.length; idx += 1) {
    if (sortedArray1[idx] !== sortedArray2[idx]) return false;
  }

  return true;
}