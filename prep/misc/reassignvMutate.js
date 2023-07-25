let num = 3;              // A variable assigned to a primitive value
let arr = [1, 2, 3];      // A variable assigned to an array
let obj = { a: 1, b: 2 }; // A variable assigned to an object

num = 42;    // Reassignment
arr[1] = 42; // Reassignment of array element, but NOT the variable
             // The array referenced by arr is mutated!
obj.a = 42;  // Reassignment of object property, but NOT the variable
             // The object referenced by obj is mutated.

// You can still reassign the variables
arr = 42;                 // Reassignment; array is lost
obj = { b: 1, c: 2 }      // Reassignment: now refers to a different object