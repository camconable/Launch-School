/* eslint-disable max-len */
// Sure! Here are 40 JavaScript exercise descriptions with expected function invocations and outputs:

// Write a function that takes a number and returns its square.
// console.log(square(5)); // Expected output: 25
// console.log(square(10)); // Expected output: 100

// Write a function that takes an array of numbers and returns the average.

// console.log(average([1, 2, 3, 4, 5])); // Expected output: 3
// console.log(average([10, 20, 30])); // Expected output: 20

// SOLUTION

// loop through array => sum total
// divide total by number of items in array (arr.length), round to nearest number

// function average(arr) {
//   let total = arr.reduce((acc, num) => acc + num, 0);
//   return Math.round(total / arr.length);
// }

// Write a function that takes a string and returns the reverse of it.


// console.log(reverseString('hello')); // Expected output: 'olleh'
// console.log(reverseString('javascript')); // Expected output: 'tpircsavaj'

// SOLUTION
// loop through arr, arr.length times
// shift element and push to array

// function reverseString(str) {
//   return str.split('').reduce((acc, char) => {
//     acc.unshift(char);
//     return acc;
//   }, []).join('');
// }

// Write a function that takes an array of strings and returns the longest string.


// console.log(longestString(['apple', 'banana', 'pear'])); // Expected output: 'banana'
// console.log(longestString(['cat', 'dog', 'elephant'])); // Expected output: 'elephant'

// SOLUTION
// loop through elems using reduce
//   if elem.length is longer than previous, set to acc
// return acc

// function longestString(arr) {
//   return arr.reduce((acc, word) => ((word.length > acc.length) ? word : acc), '');
// }

// Write a function that takes a number and returns true if it's prime, false otherwise.


// console.log(isPrime(7)); // Expected output: true
// console.log(isPrime(12)); // Expected output: false
// console.log(isPrime(128977897982345)); // Expected output: false
// console.log(isPrime(10000079)); // Expected output: true
// console.log(isPrime(11111117)); // Expected output: true


// SOLUTION
// input: number
// output: boolean, true if prime, false otherwise

// check if even (divisible by 2)
//   num % 2 === 0
// check if ends in 0 or 5
//   coerce to array: let numArray = String(num).split('').map(Number)
//   check if last element (num) of array is 0 or 5
//     if(numArray[numArray.length - 1] === 0 || numArray[numArray.length - 1] === 5)
// check if sum of num's digits is divisible by 3
//   get num's digits' sum using reduce

// if all the above are false, return true, otherwise return false

// eslint-disable-next-line max-lines-per-function
// function isPrime(num) {

//   const isEven = (num) => num % 2 === 0;

//   return !(isEven(num) || divisibleByThree(num) || endsInZeroOrFive(num));
// }

// function divisibleByThree(num) {
//   let arr = String(num).split('').map(Number);
//   let sumOfDigits = arr.reduce((acc, digit) => acc + digit, 0);
//   if (sumOfDigits % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function endsInZeroOrFive(num) {
//   let arr = String(num).split('').map(Number);
//   let lastDigit = arr[arr.length - 1];
//   if (lastDigit === 0 || lastDigit === 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Write a function that takes an array of numbers and returns the second largest number.


// console.log(secondLargest([1, 2, 3, 4, 5])); // Expected output: 4
// console.log(secondLargest([10, 5, 8, 12, 6])); // Expected output: 10

// sort numbers largest to smallest, get second element

// function secondLargest(arr) {
//   let sortedArr = arr.sort((a, b) => b - a);
//   return sortedArr[1];
// }


// Write a function that takes a string and returns the number of words in it.


// console.log(countWords('Hello world')); // Expected output: 2
// console.log(countWords('This is a sentence')); // Expected output: 4

// input: string
// output: num, of words

// convert to array (split on ' '), return array length

// function countWords(str) {
//   return str.split(' ').length;
// }

// Write a function that takes an array of numbers and returns a new array with all duplicates removed.


// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([10, 10, 20, 30, 30, 40])); // Expected output: [10, 20, 30, 40]
// console.log(removeDupesVerTwo([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
// console.log(removeDupesVerTwo([10, 10, 20, 30, 30, 40])); // Expected output: [10, 20, 30, 40]

// input: array
// output: array, with duplicate elements removed

// initialize new array
// loop through old array
//   if elem is not in new array, push to new array
// return new array

// function removeDuplicates(arr) {
//   return arr.reduce((acc, elem) => {
//     if (!acc.includes(elem)) {
//       acc.push(elem);
//     }
//     return acc;
//   }, []);
// }

// function removeDupesVerTwo(arr) {
//   return arr.reduce((acc, elem) => (!acc.includes(elem) ? acc.concat(elem) : acc), []);
// }

// Write a function that takes a string and returns true if it contains only digits, false otherwise.


// console.log(isDigitsOnly('1234')); // Expected output: true
// console.log(isDigitsOnly('abc123')); // Expected output: false

// input: string
// output: boolean, true if contains only digits, false otherwise

// populate array to check: create array that includes strings '0' thru '9'
// loop through string characters
//   if char is not in ['0' - '9'], return false
// otherwise return true

// function isDigitsOnly(str) {
//   let digits = [];
//   for (let idx = 0; idx < 10; idx += 1 ) {
//     digits.push(String(idx));
//   }
//   for (let char of str.split('')) {
//     if (!digits.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// Write a function that takes an array of strings and returns a new array with all strings sorted alphabetically.


// console.log(sortStrings(['banana', 'apple', 'pear'])); // Expected output: ['apple', 'banana', 'pear']

// console.log(sortStrings(['dog', 'cat', 'elephant'])); // Expected output: ['cat', 'dog', 'elephant']

// input: array (of words)
// output: array (of words sorted alphabetically)

// loop through array
//   loop through


// Write a function that takes a number and returns the factorial of that number.


// console.log(factorial(5)); // Expected output: 120
// console.log(factorial(7)); // Expected output: 5040

// function factorial(num) {
//   let sum = 1;
//   for (let idx = num; idx > 0; idx -= 1) {
//     sum *= idx;
//   }
//   return sum;
// }

// Write a function that takes an array of numbers and returns the median value.


// console.log(median([1, 2, 3, 4, 5])); // Expected output: 3
// console.log(median([10, 20, 30, 40, 50, 60])); // Expected output: 35

// input: array
// output: median

// if array length is odd, return middle number
// if array length is even, return the avg of two middle values
//   Math.round((arr[arr.length / 2] / arr[arr.length / (2 - 1)])

// function median(arr) {
//   if (arr.length % 2 === 1) {
//     return arr[Math.floor(arr.length / 2)];
//   } else if (arr.length % 2 === 0) {
//     let num1 = arr[arr.length / 2];
//     let num2 = arr[(arr.length / 2) - 1];
//     return Math.round(((num1 + num2) / 2));
//   }
//   return null;
// }

// Write a function that takes a string and returns the number of unique characters in it.


// console.log(countUniqueChars('hello')); // Expected output: 4
// console.log(countUniqueChars('abcdefghijklmnopqrstuvwxyz')); // Expected output: 26
// console.log(countUniqueCharsVerTwo('hello')); // Expected output: 4
// console.log(countUniqueCharsVerTwo('abcdefghijklmnopqrstuvwxyz')); // Expected output: 26

// remove duplicates => push to array, count length of array

// initialize dupeArray
//   loop through strArray
//     if char is not in dupeArray, push to dupeArray
// return dupeArray length

// function countUniqueChars(str) {
//   return str.split('').reduce((acc, char) => (!acc.includes(char) ? acc.concat(char) : acc), []).length;
// }

// function countUniqueCharsVerTwo(str) {
//   let dupeArray = [];
//   for (let char of str.split('')) {
//     if (!dupeArray.includes(char)) {
//       dupeArray.push(char);
//     }
//   }
//   return dupeArray.length;
// }

// Write a function that takes an array of numbers and returns the product of all elements.


// console.log(productOfArray([1, 2, 3, 4, 5])); // Expected output: 120
// console.log(productOfArray([2, 4, 6, 8])); // Expected output: 384

// input: array
// output: number, product of all elements

// initialize product to 1
// loop through numArray
//   product *= num;
// return product

// function productOfArray(arr) {
//   return arr.reduce((prod, num) => prod * num, 1);
// }


// Write a function that takes a string and returns true if it's a valid email address, false otherwise.


// console.log(isValidEmail('example@example.com')); // Expected output: true
// console.log(isValidEmail('invalid.email')); // Expected output: false
// console.log(isValidEmail('example.example@com')); // Expected output: false

// input: string
// output: boolean, true if valid email, false otherwise
// valid email: contains 1 or more chars, then '@', then '.', then 1 or more chars

// split on '@'
//   if array.length !== 2, return false
// split second elem on '.'
//   if array.length !== 2, return false
// first check if contains @, then feed second elem from this into function checking if it contains dot
// return true

// function isValidEmail(str) {
//   let containsChar = (str, char) => {
//     let arr = str.split(char);
//     return !(arr.length !== 2);
//   };

//   let containsAt = containsChar(str, '@');
//   let splitOnAtChars = containsAt ? str.split('@')[1] : str;
//   let containsDotAfterAt = containsChar(splitOnAtChars, '.');

//   return containsAt && containsDotAfterAt;
// }


// Write a function that takes an array of strings and returns a new array with all strings that start with a vowel.


// console.log(vowelStrings(['apple', 'banana', 'orange', 'PEAR'])); // Expected output: ['apple', 'orange']
// console.log(vowelStrings(['car', 'Elephant', 'dog', 'igloo'])); // Expected output: ['elephant', 'igloo']

// initialize vowels array
// initialize finalArray
// loop through array of strings (converted to lowercase)
//   if first char is in vowels array, push to finalArray
// return finalArray

// function vowelStrings(arr) {
//   return arr.join(',')
//     .toLowerCase()
//     .split(',')
//     .reduce((acc, word) =>
//       (['a', 'e', 'i', 'o', 'u'].includes(word[0]) ? acc.concat(word) : acc)
//     , []);
// }


// Write a function that takes a number and returns the sum of its digits.


// console.log(sumOfDigits(123)); // Expected output: 6
// console.log(sumOfDigits(9876)); // Expected output: 30

// input: number
// output: number, sum of inputNum's digits

// convert to string, split into array, convert to numbers
// use reduce to iterate through
//   on each iteration convert to Number and add to accumulator

// function sumOfDigits(num) {
//   return String(num)
//     .split('')
//     .reduce((acc, num) => {
//       acc += Number(num);
//       return acc;
//     }, 0);
// }

// Write a function that takes an array of numbers and returns the number of even numbers in it.


// console.log(countEvenNumbers([1, 2, 3, 4, 5])); // Expected output: 2
// console.log(countEvenNumbers([10, 11, 12, 13, 14, 15])); // Expected output: 3

// input: array
// output: number, of even numbers

// iterate through array
//   if number is even, add to counter
// return counter

// function countEvenNumbers(arr) {
//   return arr.reduce((acc, num) => (num % 2 === 0 ? ++acc : acc), 0);
// }

// Write a function that takes a string and returns the most frequent character in it.


// console.log(mostFrequentChar('hello')); // Expected output: 'l'
// console.log(mostFrequentChar('abracadabra')); // Expected output: 'a'

// input: string
// output: character, most frequent
// most frequent: character occurs the most

// remove duplicates and store in newArray
// iterate through newArray
//   initialize count
//   while origArray includes (char)
//     remove (splice) char
//     increment count
//   end of loop, push count to countArray
// return element from newArray where the count is the highest in countArray

// function mostFrequentChar(str) {
//   let strArray = str.split('');
//   let removedDupes = strArray.reduce((acc, char) =>
//     (!acc.includes(char) ? acc.concat(char) : acc), []);

//   let countArray = [];
//   for (let char of removedDupes) {
//     let count = 0;

//     while (strArray.includes(char)) {
//       ++count;
//       strArray.splice(strArray.indexOf(char), 1);
//     }
//     countArray.push(count);
//   }
//   let highestCount = Math.max(...countArray);

//   return removedDupes[countArray.indexOf(highestCount)];
// }

// Write a function that takes an array of strings and returns a new array with all strings shorter than a given length.


// console.log(shorterThan(['apple', 'banana', 'pear'], 5)); // Expected output: ['pear']
// console.log(shorterThan(['javascript', 'python', 'ruby', 'c++'], 5)); // Expected output: ['ruby', 'c++']

// input: array, number
// output: array, with strings shorter than given length

// loop through array
//   if word.length < maxLength, push to finalArray
// return finalArray

// function shorterThan(arr, maxLength) {
//   return arr.reduce((acc, word) =>
//     (word.length < maxLength ? acc.concat(word) : acc), []);
// }

// Write a function that takes a number and returns true if it's a perfect square, false otherwise.


// console.log(isPerfectSquare(16)); // Expected output: true
// console.log(isPerfectSquare(25)); // Expected output: true
// console.log(isPerfectSquare(30)); // Expected output: false
// console.log(isPerfectSquare(NaN)); // Expected output: false
// console.log(isPerfectSquare(undefined)); // Expected output: false

// check if square root of provided number has a remainder

// function isPerfectSquare(num) {
//   return Math.sqrt(num) % 1 === 0;
// }


// Write a function that takes an array of numbers and returns the sum of the squares of each number.


// console.log(sumOfSquares([1, 2, 3])); // Expected output: 14
// console.log(sumOfSquares([4, 5, 6])); // Expected output: 77

// loop through array
//   square each num, push to newArray
// loop through newArray
//   sum the total

// function sumOfSquares(arr) {
//   let squaredArray = arr.reduce((acc, num, idx) => {
//     acc[idx] = num * num;
//     return acc;
//   }, []);

//   return squaredArray.reduce((acc, num) => acc + num, 0);
// }

// Write a function that takes a string and returns the number of occurrences of each character in it.


// console.log(characterCount('hello')); // Expected output: { h: 1, e: 1, l: 2, o: 1 }
// console.log(characterCount('abracadabra')); // Expected output: { a: 5, b: 2, r: 2, c: 1, d: 1 }
// console.log(characterCountAI('hello')); // Expected output: { h: 1, e: 1, l: 2, o: 1 }
// console.log(characterCountAI('abracadabra')); // Expected output: { a: 5, b: 2, r: 2, c: 1, d: 1 }

// input: string
// output: object, that includes of occurrences of each character
//   key: char
//   value: num of occurrences

// convert string to array
// construct object with keys being chars
// loop through object to update counts:
//   inner (while) loop through array
//     if elem === key, increment obj value
//     remove from array
// return object

// function characterCountAI(str) {
//   let charCount = {};

//   for (let char of str) {
//     if (charCount[char]) { // if already exists, increment
//       charCount[char]++;
//     } else {
//       charCount[char] = 1; // otherwise, initialize to 1
//     }
//   }

//   return charCount;
// }

// function characterCount(str) {
//   let arr = str.split('');
//   let charCount = {};
//   for (let char of arr) {
//     charCount[char] = 0;
//   }
//   for (let char in charCount) {
//     while (arr.includes(char)) {
//       if (char === arr[arr.indexOf(char)]) {
//         charCount[char] += 1;
//       }
//       arr.splice(arr.indexOf(char), 1);
//     }
//   }
//   return charCount;
// }

// Write a function that takes an array of numbers and returns the third smallest number.


// console.log(thirdSmallest([1, 2, 3, 4, 5, 5])); // Expected output: 3
// console.log(thirdSmallest([10, 5, 8, 12, 6])); // Expected output: 8

// input: array of numbers
// output: number, third smallest

// remove duplicates
// sort numbers, smallest to largest, return as an array
// return element at third index

// function thirdSmallest(arr) {
//   let removedDupes = arr.reduce((acc, num) => (!acc.includes(num) ? acc.concat(num) : acc), []);

//   let sortedNums = removedDupes.sort((a, b) => a - b);

//   return sortedNums[2];
// }

// Write a function that takes a string and returns true if it's a valid palindrome ignoring case and non-alphanumeric characters.


// console.log(isValidPalindrome('A man, a plan, a canal: Panama')); // Expected output: true
// console.log(isValidPalindrome('race a car')); // Expected output: false

// clean the string: lowercase, convert to array,
//   remove spaces and punctuation [" ", "'", ":", ",", "."]
// 


// function isValidPalindrome(str) {
//   // let spacesAndPunc = [" ", "'", ":", ",", "."];
//   let cleanedString = str.toLowerCase()
//     .split('')
//     .reduce((acc, char) => (isAlphabetical(char) ? acc.concat(char) : acc), []).join('');
//   let compareString = cleanedString.split('').toReversed().join('');
//   return cleanedString === compareString;
// }

// function isAlphabetical(char) {
//   return (/[a-zA-Z]/).test(char);
// }

// Write a function that takes an array of strings and returns a new array with all strings sorted by length in ascending order.


// console.log(sortByLength(['apple', 'banana', 'pear'])); // Expected output: ['pear', 'apple', 'banana']
// console.log(sortByLength(['dog', 'elephant', 'cat'])); // Expected output: ['dog', 'cat', 'elephant']

// input: array, of strings
// output: array, sorted by string lengs
// assume strings are alphabetical

// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
//   // return arr.sort(function(a, b) {
//   //   if (a.length < b.length) {
//   //     return -1;
//   //   } else if (a.length > b.length) {
//   //     return 1;
//   //   } else {
//   //     return 0;
//   //   }
//   // });
// }

// Write a function that takes a number and returns the sum of all prime numbers less than or equal to it.


// console.log(sumOfPrimes(10)); // Expected output: 17
// console.log(sumOfPrimes(20)); // Expected output: 77

// input: number
// output: num, sum of all primes less than or equal to it

// initialize empty primeArray
// loop from num down to 1, checking if each number is prime
//   not prime if:
//     ends in 0 or 5
//     sum of digits is divisible by 3
//     divisible by 2
//   if number is prime, push to primeArray
// return sum of all numbers in primeArray

// function sumOfPrimes(num) {
//   let primeArray = [];
//   for (let idx = num; idx > 1; idx -= 1) {
//     if (isPrime(idx)) {
//       primeArray.push(idx);
//     }
//   }
//   return primeArray.reduce((acc, num) => acc + num);
// }

// function isPrime(num) {
//   let numArray = String(num)
//     .split('')
//     .reduce((acc, digit) => acc.concat(Number(digit)), []);
//   let lastElem = numArray[numArray.length - 1];
//   let sumOfDigits = numArray.reduce((acc, num) => acc + num);
//   if (numArray.length > 1) {
//     if (lastElem === 0 || lastElem === 5) return false;
//   }
//   if (num !== 2 && num % 2 === 0) return false;
//   if (num !== 3 && sumOfDigits % 3 === 0) return false;
//   return true;
// }



// Write a function that takes an array of numbers and returns a new array with all numbers that are perfect squares.


// console.log(perfectSquares([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Expected output: [1, 4, 9]
// console.log(perfectSquares([10, 16, 25, 30, 36])); // Expected output: [16, 25, 36]

// input: array, of numbers
// output: array, of numbers that are perfect squares

// perfect square: if you square root the number and it is a whole number
// loop through numbersArray, check if perfect square, if it is push to finalArray
// return finalArray

// function perfectSquares(arr) {
//   return arr.reduce((acc, num) => (isPerfectSquare(num) ? acc.concat(num) : acc), []);
// }

// function isPerfectSquare(num) {
//   return Number.isInteger(Math.sqrt(num));
// }

// Write a function that takes a string and returns the longest palindromic substring.

// cbdeded
// cbdeded

console.log(longestPalindrome('babad')); // Expected output: 'bab' or 'aba'
console.log(longestPalindrome('cbbd')); // Expected output: 'bb'
console.log(longestPalindrome('cbdeded')); // Expected output: 'deded'

// 

// Write a function that takes an array of numbers and returns the number of distinct pairs that sum up to a given target.


// console.log(pairSum([1, 2, 3, 4, 5], 6)); // Expected output: 2
// console.log(pairSum([2, 4, 6, 8], 10)); // Expected output: 2

// Write a function that takes a string and returns true if it's a valid parentheses string, false otherwise.


// console.log(isValidParentheses('()')); // Expected output: true
// console.log(isValidParentheses('()[]{}')); // Expected output: true
// console.log(isValidParentheses('(]')); // Expected output: false

// Write a function that takes an array of numbers and returns the length of the longest increasing subsequence.


// console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // Expected output: 4
// console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3])); // Expected output: 4

// Write a function that takes a string and returns the first non-repeating character in it.


// console.log(firstNonRepeatingChar('leetcode')); // Expected output: 'l'
// console.log(firstNonRepeatingChar('loveleetcode')); // Expected output: 'v'

// Write a function that takes an array of integers and returns the length of the longest subarray with a sum equal to 0.


// console.log(longestZeroSumSubarray([15, -2, 2, -8, 1, 7, 10, 23])); // Expected output: 5
// console.log(longestZeroSumSubarray([1, 2, 3, -3, -2, -1])); // Expected output: 6

// Write a function that takes a string and returns the minimum number of characters to be deleted to make it a palindrome.


// console.log(minDeletionsForPalindrome('aebcbda')); // Expected output: 2
// console.log(minDeletionsForPalindrome('abcde')); // Expected output: 4

// Write a function that takes an array of integers and returns the maximum product of any three numbers.


// console.log(maxProductOfThree([-1, -2, -3])); // Expected output: -6
// console.log(maxProductOfThree([1, 2, 3, 4])); // Expected output: 24

// Write a function that takes a string and returns the length of the longest substring without repeating characters.


// console.log(longestSubstringWithoutRepeating('abcabcbb')); // Expected output: 3
// console.log(longestSubstringWithoutRepeating('bbbbb')); // Expected output: 1

// Write a function that takes an array of integers and returns the number of subarrays with a sum equal to a given target.


// console.log(subarraySum([1, 1, 1], 2)); // Expected output: 2
// console.log(subarraySum([1, 2, 3], 3)); // Expected output: 2

// Write a function that takes a string and returns true if it can be formed by concatenating words from a given list, false otherwise.


// console.log(canForm('catdog', ['cat', 'cats', 'dog', 'catsdog'])); // Expected output: true
// console.log(canForm('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // Expected output: false

// Write a function that takes an array of integers and returns the length of the longest subarray with a product less than or equal to a given target.


// console.log(longestSubarrayWithProductLessThanTarget([1, 2, 3, 4], 10)); // Expected output: 3
// console.log(longestSubarrayWithProductLessThanTarget([1, 2, 3, 4, 5], 100)); // Expected output: 4

// These exercises cover a wide range of JavaScript concepts and algorithms, including string manipulation, array operations, dynamic programming, and more. Each exercise includes expected function invocations and outputs to help you test your solutions. Remember to break down each problem into smaller steps, think about the necessary logic and operations, and test your code with the provided examples. If you encounter difficulties, don't hesitate to refer to JavaScript documentation, tutorials, or seek help from the community.