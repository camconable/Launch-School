// input: array of elements of any type
// output: a new array that includes every odd element of the passed array

// declare empty array;
// iterate through array using for/of loop
// if array element is even (array[elem % 2 === 0]), put in new array
// return new array

function oddities(arr) {
  let finalArr = [];
  for (const [index, elem] of arr.entries()) {
    if (index % 2 === 0) {
      finalArr.push(elem);
    } else {
      continue;
    }
  }
  return finalArr;
}

function evenities(arr) {
  let finalArr = [];
  for (let idx = 1; idx < arr.length; idx += 2) {
    finalArr.push(arr[idx]);
  }
  return finalArr;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Further Exploration:
console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []