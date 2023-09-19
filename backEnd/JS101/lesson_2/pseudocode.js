// START

// # Given a collection of integers called "numbers"

// SET iterator = 1
// SET savedNumber = value within numbers collection at space 1

// WHILE iterator <= length of numbers
//   SET currentNumber = value within numbers collection at space "iterator"
//   IF currentNumber > savedNumber
//     savedNumber = currentNumber
//   ELSE
//     skip to the next iteration

//   iterator = iterator + 1

// PRINT savedNumber

// END


function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}


// For now, try a few practice rounds using pseudocode to guide your problem-solving logic. For example, write out pseudocode (both casual and formal) that does the following:

// a function that returns the sum of two numbers
  
  // CASUAL:
  // given 2 numbers
  // add first number to second number
  // return sum

  // FORMAL:
  // # given 2 numbers (num1, num2)
  // SET sum = num1 + num2
  // PRINT sum

// a function that takes an array of strings, and returns a string that is all those strings concatenated together
  // CASUAL:
  // given a collection (array) of strings
  // define longString
  // iterate through the array
  //  - save the first value to longString
  //  - for each iteration, concatenate longString with current value
  // after iterating through collection, return longString

  // FORMAL:
  // # given an array of strings
  // SET longString = empty string
  // WHILE iterator <= array length
  //  SET longString += current array element
  //  iterator += 1
  // PRINT longString

// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance: 
// everyOther([1,4,7,2,5]); // => [1,7,5]

// CASUAL:
// given an array of integers
// define empty array (newArray)
// iterate through the array
// - if current element is odd (element % 2 === 1)
//  - add (push) current element to newArray 
// - otherwise, move to next value in array

// after iteration, return newArray

// FORMAL: 
// # given an array of integers myInts
// SET newArray = empty array
// WHILE iterator <= myInts array length
//  IF (element % 2 === 1)
//    newArray.push(element)
//  ELSE continue

//  PRINT newArray

// a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null. 

// CASUAL
// given a string of characters
// define count
// iterate through each character
//  - if the current character matches the given character
//    - add to count
//  - if count is 3
//    - return the index of the current character
// after iteration, if count < 3, return null

// FORMAL
// # given a string of characters
// SET count
// WHILE iterator <= string length
//  IF currentChar === givenChar
//    SET count += 1
//  IF count === 3
//    RETURN indexOf(currentChar)
// IF count < 3
//  RETURN null


// a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
// You may assume that both array arguments have the same number of elements.

// CASUAL
// given two arrays of numbers (arr1, arr2)
// define new empty array (mergedArr) with length equal to both input arrays (arr1.length + arr2.length)
// iterate through mergedArr
// - if index is even
//  - push element of arr1
//  - remove first element of arr1 
// - if index is odd
//  - push element of arr2
//  - remove first element of arr2
// after iteration, return mergedArr

// FORMAL
// # given two arrays of numbers (arr1, arr2)
// SET mergedArr.length = arr1.length + arr2.length;
// WHILE iterator <= mergedArr.length
//  IF current index of mergedArr is even (i % 2 === 0)
//    SET (push) arr1 element 0 to mergedArr (mergedArr.push(arr1[0]))
//    remove first element from arr1 (arr1.shift())
//  IF current index is odd (i % 2 === 1)
//    SET (push) arr2 element 0 to mergedArr (mergedArr.push(arr2[0]))
//    remove first element from arr2 (arr2.shift())
// RETURN mergedArr