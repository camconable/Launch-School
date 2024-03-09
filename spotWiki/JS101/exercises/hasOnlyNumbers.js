// Create a function that takes a string as an argument and return a boolean, true if the string contains only numbers and false otherwise. For example:


console.log(hasOnlyNumbers('12311')); //true
console.log(hasOnlyNumbers('Pdd00_4a11')); //false

// input: string
// output: boolean, true if number

// set bool to true
// loop through (lowercased) string
// if char is a number, return false
//   if (typeof char === 'number'), set bool to false
// return bool

function hasOnlyNumbers(string) {
  let bool = true;
  string.toLowerCase().split('').forEach((char) => {
    if (!(Number.isInteger(Number(char)))) {
      bool = false;
    }
  });
  return bool;
}