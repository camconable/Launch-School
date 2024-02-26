// Create a function that takes two strings as an argument and returns a number representing occurrences of the second argument as a sub-string of the first argument, for example:

console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' ));// => 3
console.log(countSubstr('Hellor, Hello! How are you doing Mellody?', 'are' ));// => 1
console.log(countSubstr('Hello, Hello! you How are you doing Mellody you you?', 'you' ));// => 4
console.log(countSubstr('Hello, Hello! How are you doing Mellody?', 'd' ));// => 2

// input: 2 string arguments
// output: number (of occurrences of 2nd arg as substring of 1st arg)


function countSubstr(longString, searchString) {
  return longString.split(searchString).length - 1;
}