// 8) Create a function that creates and returns a copy of an 
// object. The function should take two arguments: the object 
// to copy and an array of the keys that you want to copy. Do 
// not mutate the original object.

// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(sourceObj, arrKeys) {
  // initialize empty destObj
  // let destObj = {};

  // if keys exist, loop through them and assign sourceObj to destObj
//   if (arrKeys) {
//     arrKeys.forEach(element => {
//       destObj[element] = sourceObj[element];
//     });
//     return destObj;
//   }
//     // if keys dont exist copy entire sourceObj into destObj
//   else {
//     return Object.assign(destObj, sourceObj);
//   }
// }

// let copiedObj = copyObj(objToCopy, ['bar', 'qux', 'x']);

// The function should let you omit the array of keys argument 
// when calling the function. If you do omit the argument, the 
// function should copy all of the existing keys from the object.

// Here are some examples for your reference:

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }