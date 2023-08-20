// Equality

// Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 == array2);

// the output will be false. array1 and array2 are holding the same values but they are not occupying the same locations in memory. array1 and array2 contain the pointers to the objects, not the values of the objects themselves.