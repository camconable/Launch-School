/* eslint-disable max-len */
// - Create a function that takes a string as an argument and return an array of words that exist in that strings and begins with letter `a`. For example:


// extractStr('abcd bcd aa'); //[abcd, aa]

// input: string
// output: array of words that exist in string beginning with letter 'a'
// word: consecutive alphabetic characters delimited by spaces

// define matchCharacter ('a')
// convert string to wordsArray
// loop through wordsArray
//   if first character of element equals matchCharacter,
//   push element to finalArray

// try using normal method first then using reduce
// reduce method to capture finalArray
// acc is array
// if matchCharacter matches elem[0], return acc.concat(elem)

// function extractStr(string) {
//   let matchCharacter = 'a';
  // let wordsArray = string.split(' ');
  // let finalArray = [];
  // for (let elem of wordsArray) {
  //   if (elem[0] === matchCharacter) finalArray.push(elem);
  // }
  // return finalArray;

//   let finalArray = string.split(' ').reduce((acc, currElem) => {
//     if (currElem[0] === matchCharacter) {
//       acc.push(currElem);
//     }
//     return acc;
//   }, []);
//   console.log(finalArray);
// }


// - Create a function that takes two strings as arguments a return an array of sub strings that are the same as the second argument. For example:


extractStr('abcdefabcdefabcdef abcdefg', 'abc'); //['abc', 'abc', 'abc', 'abc'];



// input: two strings
// output: array of substrings, the number of elements being the same as the second argument


// loop through string1
// jump to index in string1 where first chars of string1 and string2 match
//   inner loop, match rest of characters in string2 to string 1
//     while they match, keep bool to true
//   if the last element of string2 matches string1 elem, push string2 to finalArray
//     



function extractStr(string1, string2) {
  let string1Array = string1.split('');
  for (let idx = 0; idx < string1Array.length; idx += 0) {
    
  }
}



// - Create a function that takes a string as an argument and return an array of all the alphanumeric characters that the input string contained. For Example:


// etractStr('abcd123acc 227 0 , *&^a'); //['1', '2', '3', '2', '2', '7', '0'];

