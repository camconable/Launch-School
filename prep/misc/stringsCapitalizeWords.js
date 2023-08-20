// Capitalize Words

// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let str = 'launch school tech & talk';

function capitalizeStr(str) {
  // place full string into an array
  let strArray = str.split(' ');

  // initialize empty array for capitalized words
  let capitalizedWords = [];

  // iterate over array of words
  for (let i = 0; i < strArray.length; i += 1) {

    // wordHolder is a placeholder for each word to be declared/assigned on each iteration
    let wordHolder = strArray[i];

    // for each word, take first letter (0 index) and make uppercase
    // concatenate capitalized letter with the rest of the word using slice
    // push the resulting string onto capitalized words array
    capitalizedWords.push(wordHolder[0].toUpperCase() + wordHolder.slice(1));
  }

  // concatenate array elements separated by space, into a string
  return capitalizedWords.join(' ');
}


console.log(capitalizeStr(str));

// console.log(capitalizeStr(str));