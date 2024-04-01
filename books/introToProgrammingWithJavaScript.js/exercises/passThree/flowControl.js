/* eslint-disable max-len */
// // https://launchschool.com/books/javascript/read/flow_control
// What values do the following expressions evaluate to?

// false || (true && false); => false
// true || (1 + 2); => true
// (1 + 2) || true; => 3
// true && (1 + 2); => 3
// false && (1 + 2); => false
// (1 + 2) && true; => true
// (32 * 4) >= 129; => false
// false !== !true; => false
// true === 4; => false
// false === (847 === '847'); => true
// false === (847 == '847'); => false
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; => 
// (false || false) || (true) || false => true

// Solution

// Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
// Solution

function evenOrOdd(num) {
  let result = num % 2 === 0 ? 'even' : 'odd';
  console.log(result);
}
// evenOrOdd(9);

// Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
// Solution

function evenOrOddVerOne(num) {
  if (!Number.isInteger(num)) {
    console.log('error');
    return;
  }
  let result = num % 2 === 0 ? 'even' : 'odd';
  console.log(result);
}
// evenOrOddVerOne('test');
// evenOrOddVerOne(90);
// evenOrOddVerOne(undefined);

// What does the following code log to the console, and why?

// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }

// barCodeScanner('113');

// Solution

// Product2
// Product3
// Product not found!

// The following is logged to the console because the case clauses "fall through" to the rest of the case clauses. This is due to there being no break statements in each case clause. So once a match is found, the code executes the code in that particular case clause followed by all the case clauses below it. This is why Product1 was not logged, because a match was not found yet.

// Refactor this statement to use an if statement instead.

// return foo() ? 'bar' : qux();

// Solution

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// What does this code output to the console?

// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);

// Solution

// Not Empty

// When isArrayEmpty is invoked, it is passed the reference to an empty array. That reference gets assigned to the parameter arr in the function. Therefore, arr is truthy as it contains a reference to an (empty) array. If arr was null or undefined it would evaluate as false and the function would log 'Empty' to the console.


// Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

// Solution

// input: string
// output: string, all caps only if longer than 10 characters, otherwise return origString

function allCaps(string) {
  if (string.length > 10) {
    return string
      .split('')
      .reduce((acc, char) => acc.concat(char.toUpperCase()), [])
      .join('');
  }
  return string;
}

// console.log(allCaps('hello world'));
// console.log(allCaps('goodbey'));

// Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// Expected Output

// 25 is between 0 and 50
// 75 is between 51 and 100
// 125 is greater than 100
// -25 is less than 0

// Solution

function numberRange(num) {
  if (num < 0) console.log(`${num} is less than 0`);
  else if (num >= 0 && num <= 50) console.log(`${num} is between 0 and 50`);
  else if (num >= 51 && num <= 100) console.log(`${num} is between 51 and 100`);
  else if (num > 100) console.log(`${num} is greater than 100`);
}

// Without running this code, what will it print?

// console.log(false ?? null); => false
// console.log(true ?? (1 + 2)); => true
// console.log((1 + 2) ?? true); => 3
// console.log(null ?? false); => false
// console.log(undefined ?? (1 + 2)); => 3
// console.log((1 + 2) ?? null); => 3
// console.log(null ?? undefined); => undefined
// console.log(undefined ?? null); => null

// Solution

// Without running this code, what will it print?

// function show(foo = undefined, bar = null) {
//   console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
// }

// show(5, 7); => 'foo is 5, bar is 7'
// show(0, 0); => 'foo is 0, bar is 0'
// show(4); => 'foo is 4, bar is 42'
// show(); => 'foo is 3, bar is 42'

// Solution

