// 10) How many primitive values are there in the following 
// expression? Identify them. How many objects are there in 
// the expression? Identify those objects.

// [1, 2, ["a", ["b", false]], null, {}]

// 1, 2, null are primitive values, so 3 total
// ["a", ["b", false]] is an Array, which is an Object,
// {} is an empty Object, so 2 objects total
// Cam's answer: 3 primitives, 2 objects total **WRONG**

// **break it down further**
// 1, 2, "a", "b", false, null are primitives = 6
// OBJECTS: entire array is an object, next inner array (object), 
// innermost array (object), empty object = 4 objects total
// There are 6 primitive values and 4 objects total