// - Create a function that takes a string as an argument and returns a string with the first and the last character swapped. For example:


// console.log(swappIt('abcdef')); //'fbcdea'

// input: string
// output: string, first and last character swapped

// swap:
//   last char: pop
//   first char: shift
//   push(firstchar)
//   unshift(lastchar)

// function swappIt(string) {
//   let stringArr = string.split('');
//   let lastChar = stringArr.pop();
//   let firstChar = stringArr.shift();

//   stringArr.push(firstChar);
//   stringArr.unshift(lastChar);

//   return stringArr.join('');
// }

// - Create a function that takes an array as an argument and returns an array with all the pair elements swapped. So the elements with index `0` will swap the place with element with index `1`, the elements with index `2` will swap place with element number `3`, and so on. For example:


console.log(swappIt(['a', 0, undefined, [], NaN, {1:2}]));

//  [0, 'a', [], undefined, {1:2}, NaN]

// input: array
// output: array, with all pair elements swapped

// swap elem 0 with 1, 2 with 3, 4 with 5

// loop through even elems (0, 2, 4)
//   let tempElem = arr[idx]
//   arr[idx] = arr[idx + 1]
//   arr[idx + 1] = tempElem

function swappIt(arr) {
  for (let idx = 0; idx < arr.length; idx += 2) {
    let tempElem = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = tempElem;
  }
  return arr;
}