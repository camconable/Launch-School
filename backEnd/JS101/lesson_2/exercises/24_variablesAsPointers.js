// Question 1

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// let myOtherWord = myWord;

// console.log(myWord);
// console.log(myOtherWord);

// Cam's answer:
// The following will print to the console:
// 'Hello'
// 'Hello'

// Strings are primitives and behave as such. Line 2 copies
// the value stored in myWord ('Hello') into myOtherWord.
// If myWord was an object, line 2 would copy the reference (pointer) instead

// Question 2

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWord = 'Hello';
// let myOtherWord = myWord;
// myWord = 'Goodbye';

// console.log(myWord);
// console.log(myOtherWord);

// Cam's answer: The following logs to the console:
// 'Goodbye'
// 'Hello'

// myWord is reassigned to the primitive string 'Goodbye'.
// Reassigning myWord does not mutate or reassign the
// value stored in myOtherWord. So, myOtherWord still contains
// 'Hello'. The strings exist in different places in memory.


// Question 3

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myOtherWords);

// Cam's answer: The following is logged to the console:
// [ 'Hi', 'Goodbye' ]
// [ 'Hi', 'Goodbye' ]

// Because we are dealing with arrays (objects), line 2
// is assigning the pointer to myWords, to myOtherWords. Therefore,
// both variables are pointing to the same object. So,
// any mutation done on myWords array will also affect myOtherWords.

// Question 4

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords = ['Hi', 'Bye'];

// console.log(myWords);
// console.log(myOtherWords);

// Cam's answer: The following is logged to the console:
// [ 'Hi', 'Bye' ]
// [ 'Hello', 'Goodbye' ]

// On line 3, myWords is being reassigned to a completely different
// object in a different location in memory. This reassignment has no bearing
// on myOtherWords, since myOtherWords is still pointing to the
// [ 'Hello', 'Goodbye' ] object.

// Question 5

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = myWords[0]; // assigns 'Hello' to myWord
// myWords[0] = 'Hi'; // mutates myWords, put's 'Hi' in 0th index

// console.log(myWords);
// console.log(myWord);

// Cam's answer: The following is logged to the console:
// [ 'Hi', 'Goodbye' ]
// 'Hello'

// In line 2, the primitive string 'Hello' is accessed and assigned to myWord.
// In line 3, the myWords object is mutated. This mutation has no bearing
// on and is not linked to the myWord variable, which only contains a primitive

// Question 6

// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = 'Hi';
// myWords[0] = myWord; // mutates myWords, puts 'Hi' into 0th index
// myWord = 'Hello'; // reassigns myWord to 'Hello'

// console.log(myWords);
// console.log(myWord);

// Cam's answer: The following will be logged to console:
// [ 'Hi', 'Goodbye' ]
// 'Hello'

// It's important to note that myWord is reassigned to a new primitive on line 4
// , but line 4 reassignment does not mutate the myWords object (at 0th index)
