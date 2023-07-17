let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// myArray.forEach(num => { 
//   if (num % 2 === 0)
//     console.log(num)
// })

myArray2.forEach(nestedArray => {
  nestedArray.forEach(num => {
    if(num % 2 === 0) {
      console.log(num);
    }
  })
})