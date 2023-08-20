// Checking items off the grocery list

// We have made a grocery list, and as we check off items on that list, we would like to remove them.

// Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// get array length for loop, since shift() changes the array length 
let arrLength = groceryList.length;

// iterate through list and log the result of pop() to the console
for (let i = 0; i < arrLength; i += 1) {
  console.log(groceryList.shift());
}
console.log(groceryList);

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []




// LS ANSWER:

// Solution

// while (groceryList.length > 0) {
//   let checkedItem = groceryList.shift();

//   console.log(checkedItem);
// }

// Discussion

// The Array.prototype.shift() method removes and returns the first element of the calling array. This method permanently modifies the array, which can be seen by logging groceryList to the console after removing elements.