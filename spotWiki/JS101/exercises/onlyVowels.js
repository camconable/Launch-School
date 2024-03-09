// Create a function that takes a string as an argument and return a boolean, true if the string contains only vowels and false otherwise. For example:


console.log(hasOnlyVowels('aaeuiooae')); //true
console.log(hasOnlyVowels('tgbhrrf_00&')); //false

// input: string
// output: boolean, true if string contains ONLY vowels
//   if string contains anything but aeiou, return false

// make array of vowels
// convert string to array, loop through array
// if element is anything but aeiou, return false
// otherwise return true

function hasOnlyVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let bool = true;
  for (let char of string) {
    if (!vowels.includes(char)) {
      bool = false;
    }
  }
  return bool;
}