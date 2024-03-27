/* eslint-disable max-len */
// Create a function that takes two strings as an argument and returns a number representing occurrences of the second argument as a sub-string of the first argument, for example:


console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' ));// => 3

// input: string1, substring (of string1)
// output: number, of occurrences of substring in string1

function countSubstr(string1, substring) {
  return string1.toLowerCase().split(substring).length - 1;
}