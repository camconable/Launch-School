// Question 1

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);

// Cam's answer: This will log the following to console:
// 'Hello'
// 'Hello'

// The return value of toUpperCase invoked on word parameter in the function
// is never returned. The function will always return undefined since the return
// does not exist explicitly.
// changeMyWord function is employing pass-by-value with the word parameter
// Therefore, the function can not mutate the global myWord variable.


// Question 2

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);

// Cam's answer: The following is logged to console:
// 'Hello'
// 'HELLO'

// In this example, the changeMyWord function defined a parameter
// (word), logs it to console (line 2), reassigns the parameter to the uppercase
// version (line 3), then returns the result (line 4)
// On line 7, myWord variable is assigned the primitive 'Hello'. On line 8,
// the returned value of the changeMyWord function is reassigned to myWord. On
// line 9, console logs the (reassigned) value stored in myWord.

// Therefore, 'Hello' is assigned to myWord, passed as an argument to
// changeMyWord, logged to console, word is assigned the uppercase
// version and returned. Each time changeMyWord runs, the argument passed
// to the function is logged.
// On line 9 we finally log the returned value, 'HELLO'

// Question 3

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

// Cam's answer: The following will be logged to console:
// 'Hello'
// 'Hello'
// 'HELLO'

// On line 8, changeMyWord is invoked, so the argument myWord is
// logged as the function's parameter (line 2), logging 'Hello'.
// The second 'Hello' is logged because myWord is passed by value
// and does not change from it's original assignment on line 7.
// The final string 'HELLO' is logged because the return value of the
// changeMyWord function is 'HELLO', which is stored in myOtherWord on
// line 8.

// Question 4

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

// Cam's answer: The following is logged to the console:
// ['Hello', 'Goodbye']
// ['Hi', 'Goodbye']

// The first array logged to the console is the original assignment
// of myWords on line 6. The object is mutated on line 3. No return
// keyword is needed for the mutation to occur, because the changeMyWords
// function is being passed the reference to the array, not the values of
// the array itself. Being able to access the reference to the array and modify
// the values will change it permanently.
// Therefore, when we log myWords again, we are
// logging the value of the pointer to the array. Mutating this object ANYWHERE,
// then logging the reference to the array will log the modified array.

// Question 5

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// function changeMyWords(words) {
//   console.log(words);
//   words = ['Hi', 'Goodbye'];
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

// Cam's answer: The following will be logged to the console:
// ['Hello', 'Goodbye']
// ['Hello', 'Goodbye']

// The reason the same values are logged to the console twice
// is that the original ['Hello', 'Goodbye'] array is never mutated.
// Line 3 assigns a new object to the words variable, but does not return
// that object. In the changeMyWords function, words is simply pointing
// to a new array, and that new array is not returned.
// The original array is not mutated.
// If the words variable was returned in the function declaration,
// then myWords would
// be "overwritten" in line 7. Because words is not returned,
// it is not overwritten.
// myWords on line 7 and 8 still contains the pointer
// to the same original array.