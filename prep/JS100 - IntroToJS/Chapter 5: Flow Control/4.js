// 4) What does the following code log to the console, and why?

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

//this logs 'Product2' followed by 'Product not found!'. the break keyword needs to be included in each case statement, otherwise the switch will continue to run and check each case even after a match. default will run unless there is a break.

//THIS ALSO PRINTS Product3 due to the fall-through behavior in switch statements. adding break statement in each case clause will resolve.
