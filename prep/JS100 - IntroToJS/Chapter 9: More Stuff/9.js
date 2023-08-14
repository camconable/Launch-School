// 9) Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

// Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.

// There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:

// > 0 === -0
// = true

// > String(-0)
// = '0'

// Fortunately, you can use Object.is to determine whether a value is -0:

// > let value = -0;
// > Object.is(value, 0)
// = false

// > Object.is(value, -0)
// = true

// There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.

// > -0/-0
// NaN
// > 5/-0
// -Infinity
// > 5/0
// Infinity
// > -5/-0
// Infinity
// > -5/0
// -Infinity
// > undefined/-0
// NaN
// > -Infinity/-0
// Infinity


// CAM'S ANSWER: incomplete and stuck

// function isNegZero(val) {
//   if ((val / 0) === (Infinity)) {
//     console.log(`first if clause: ${val}`);
//     return false;
//   } else if ((val / 0) === (-Infinity)) {
//     console.log(`second if clause: ${val}`);
//     return false;
//   } else if ((val / Infinity) === 0) {
//     console.log(`third if clause: ${val}`);
//     return false;
//   }
//   else {
//     console.log(`last if clause: ${val}`);
//     return true;
//   }
// }

// console.log(isNegZero(-0));
// console.log(isNegZero(0));
// console.log(isNegZero(234234));
// console.log(isNegZero(-678678678));

// **LS ANSWER**
// function isNegativeZero(value) {
//   return 1 / value === -Infinity;
// }

// This works since 1 / 0 returns Infinity and 1 / -0 returns -Infinity, thus letting us make the distinction. You can divide any other number except 0 or -0 to achieve the same result.

// You can be a little more explicit with your answer as well:

// function isNegativeZero(value) {
//   return (value === 0) && (1 / value === -Infinity);
// }

// While this is a little more complex, it clearly shows that we're only interested in numbers that are 0 (or -0), which also helps eliminate unwanted division operations, which may be needed for performance reasons.
