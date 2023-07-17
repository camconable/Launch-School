let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// for (let i = 0; i < myArray.length; i += 1) {
//   if (myArray[i] % 2 === 0)
//     console.log(myArray[i]);
// }

// let myArray2 = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// for (let i = 0; i < myArray2.length; i += 1) {
//   for (let j = 0; j < myArray2[i].length; j += 1) {
//     if (myArray2[i][j] % 2 === 0) 
//       console.log(myArray2[i][j]);
//   }
// }

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOrOdd = myArray3.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(`myArray3: ${myArray3}`);

console.log(`evenOrOdd: ${evenOrOdd}`);

console.log(evenOrOdd);