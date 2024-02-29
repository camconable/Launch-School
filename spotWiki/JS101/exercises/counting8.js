// Create a function that takes an array as an argument and returns an new array containing all of the array elements that appears twice, for example:

appearTwice([1, 2, undefined, 'hello', 2, undefined]); //=> [2, undefined];

// input: array
// output: array (with input elements that appeared twice)

// loop through all elements
// remove first record, then inner loop through other elements
//   if match, increment counter, remove record, decrement index
//     note: decrementing index in inner loop so we don't skip elements,
//     as we are changing the length of the array and incrementing index,
//     which can lead to problems.
// end of loop: if counter === 2, push element to finalArray

function appearTwice(inputArr) {
  let appearTwiceArr = [];

  for (let idx = 0; idx < inputArr.length; idx += 0) {
    let compareElem = inputArr.shift();
    let counter = 1;
    for (let foo = 0; foo < inputArr.length; foo += 1) {
      if (compareElem === inputArr[foo]) {
        counter += 1;
        inputArr.splice(inputArr.indexOf(inputArr[foo]), 1);
        foo -= 1;
      }
    }
    if (counter === 2) {
      appearTwiceArr.push(compareElem);
    }
  }
  console.log(appearTwiceArr);
  return appearTwiceArr;
}