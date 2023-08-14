// 3) The following code causes an infinite loop (a loop that never stops iterating). Why?

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// the while loop condition reassigns 1 to the counter variable at the start of each iteration (line 3). counter is unable to increment to the point of meeting the loop's ending condition (line 7-9), and therefore loops forever.
