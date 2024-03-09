// Create a function that takes a string as an argument and return a boolean, true if the string contains only consonants and false otherwise. For example:


console.log(hasOnlyConsonants('typRRWQQL')); //true
console.log(hasOnlyConsonants('AccdE4$$ __ ')); //false

// input: string
// output: boolean, true if string only contains consonants

// put all consonants in array
// set bool to true
// loop through (lowercased) string
// if char is not a consonant, return false
//   if (!consonants.includes(char)), set bool to false
// return bool

function hasOnlyConsonants(string) {
  let consonants = 'qwrtypsdfghjklzxcvbnm'.split('');
  let bool = true;

  for (let char of string.toLowerCase().split('')) {
    if (!(consonants.includes(char))) {
      bool = false;
    }
  }
  return bool;
}