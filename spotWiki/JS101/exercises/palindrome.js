/* eslint-disable max-len */
// A word, sentence, or longer written work that reads the same backwards. Example: A declaration facetiously attributed to Napoleon, "Able was I ere I saw Elba." Weird Al Yankovic's song "Bob" spoofs Bob Dylan's "Subterranean Homesick Blues" using a slew of palindromes. Need more palindromes? Find a huge stash here.

// - exercise:

// Create a function that takes one string as an argument and returns a boolean value, true if the string is a palindrome and false if it's not. For example:


isPalindrome('kayak'); //true
isPalindrome('apple'); //false
isPalindrome('Able was I ere I saw Elba'); //true
isPalindrome('Racecar'); //true

// input: string
// output: boolean, true if palindrome, false otherwise
// palindrome: word, sentence, etc that reads the same forwards as it does backwards

// compare string1 to string2. string2 be a copy of string1 with its characters reversed

// convert string to uppercase, then to stringArray
// compare stringArray to itself,
//   converted to uppercase, converted to array,
//   with reverse invoked on it

function isPalindrome(string) {
  let reversedString = string.toUpperCase().split('').reverse().join('');
  return string.toUpperCase() === reversedString;
}