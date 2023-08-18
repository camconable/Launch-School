// Display Division

// Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

// it will log 10 iterations of multiples of 3, up to 30, in the format: dividend / divisor = 3
// e.g.
// 3 / 1 = 3
// 6 / 2 = 3
// 9 / 3 = 3
// ...
// 30 / 10 = 3

//NOPE. There were no parenthesis and the method was not invoked, so the object is treated like a variable and does not return anything(??)