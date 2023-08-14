// 4) Does the following code produce an error? Why or why not? What output does this code send to the console?

// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }

// It does not produce an error, but since it has no ending condition to break out of the loop, it will loop forever.

// NOPE. All 3 components of a for loop are optional. In this case, the increment condition is in the loop body, which is perfectly acceptable since it does in fact increment i. This is what's logged to console:
// 1
// 2
// 3
// 4
// 5