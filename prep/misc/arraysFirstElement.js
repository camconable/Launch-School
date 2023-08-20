// First Element

// Write a function that returns the first element of an input array. For example:

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // 'Array is empty'

// What would you return if the input array was empty?


function first(arr) {
  if (arr.length < 1) {
    return 'Array is empty';
  } else {
    return arr[0];
  }
}

// you didn't read the question thoroughly. It asks what would be returned if the array were empty, not how to handle input if the array was empty. It would return undefined if the input array is empty, which is the same behavior you get when trying to access an index that is outside the bounds of the array

