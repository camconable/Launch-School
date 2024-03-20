/* eslint-disable max-len */
// - Create a function that takes two objects as arguments and return a boolean value `true` if two objects pointing to the same space in the memory and `false` otherwise. For example:


// let a = {1:2};
// let b = a;
// let c = {1:2};

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //false

// input: two objects
// output: boolean, true if both obj pointing to the same place in memory

// use strict comparison

// function theSame(obj1, obj2) {
//   return obj1 === obj2;
// }


// - Create a function that takes two objects as arguments and return a boolean value `true` if two objects have the same values (primitives) and `false` otherwise. For example:


// let a = {1:2, 2:3};
// let b = {1:2, 2:3};
// let c = {2:3, 1:2};
// let d = {1:2, 2:3, 3:4};
// let e = {'a': 1}

// console.log(theSame(a,b)); //true
// console.log(theSame(a,c)); //true
// console.log(theSame(a,d)); //false
// console.log(theSame(a,e)); //false

// input: two objects (assume no nested objects)
// output: boolean, true if both objects have the same (primitive) values

// get (primitive) values from both objects, store in array
// sort array then loop through values (of longer array), comparing each one
//   loop ending condition defined by length of longer array

// function theSame(obj1, obj2) {
//   let maxArrLength = Object.keys(obj1).length > Object.keys(obj2).length ? Object.keys(obj1).length : Object.keys(obj2).length;
//   let obj1Values = Object.values(obj1).sort();
//   let obj2Values = Object.values(obj2).sort();

//   for (let idx = 0; idx < maxArrLength; idx += 1) {
//     if (obj1Values[idx] !== obj2Values[idx]) return false;
//   }

//   return true;
// }



// - Create a function that takes two objects as arguments and return a boolean value `true` if those two objects have the same values (primitives and objects). The same objects are objects that are pointing to the same place in the memory. For example:


let a = {1:2};
let b = {2:2};
let c = {1:a, 2:b};
let d = {1:a, 2:b};
let e = {1:{1:2}, 2:{1:2}};

console.log(theSame(c,d)); //true
console.log(theSame(c,e)); //false
console.log(theSame(d,e)); //false

// check if object keys are equal
//   iterate through obj keys and compare ===
// check if object values are equal
//   iterate through obj values and compare

function theSame(obj1, obj2) {
  for (let idx = 0; idx < Object.keys(obj1).length; idx += 1) {
    if (Object.keys(obj1)[idx] !== Object.keys(obj2)[idx]) {
      return false;
    }
    if (Object.values(obj1)[idx] !== Object.values(obj2)[idx]) {
      return false;
    }
  }
  return true;
}
