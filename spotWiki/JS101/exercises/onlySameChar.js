// Create a function that takes a string as an argument and return a boolean, true if all characters in the string are the same characters and false otherwise.


haveSameChar('aaaaaa') //true
haveSameChar('cccb9') //false

// input: string
// output: boolean, true if all characters are the same

function haveSameChar(string) {
  let stringArray = string.split('');
  let compareChar = stringArray.shift();
  for (let idx = 0; idx < stringArray.length; idx += 0) {
    if (compareChar !== stringArray[idx]) return false;
    stringArray.shift();
  }
  return true;
}