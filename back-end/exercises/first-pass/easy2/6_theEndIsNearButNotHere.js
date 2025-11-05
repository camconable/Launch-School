// input: string passed as argument
// output: next to last word of the string
// word definition: any sequence of non-blank characters
// input string will always be >= 2 words

// function penultimate
// put string input into an array (of strings)
// output is next to last word
// index of next to last word = array[array.length - 2])

// function middle
// return middle word of a phrase/sentence
// if length is odd, return math.ceiling(length / 2)
// if length is even return middle pair ([length / 2], [(length / 2) + 1])

function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}

function middle(str) {
  let wordsArr = str.split(' ');
  if (wordsArr.length % 2 === 1) {
    return wordsArr[Math.floor(wordsArr.length / 2)];
  } else if (wordsArr.length % 2 === 0) {
    let middlePair = '';
    middlePair =
      wordsArr[(wordsArr.length / 2) - 1]
      + ' ' +
      wordsArr[(wordsArr.length / 2)];
    return middlePair;
  }
  return 'error';
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(middle('the big brown dog jumps over the lazy fox')); // return 'jumps'
console.log(middle('the big brown dog jumps over the lazy')); // return 'dog jumps'
