// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

logInBox('To boldly go where no one has gone before.', 7);

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// Discussion

// This is a fairly straight forward solution To simplify matters, we start out by setting horizontalRule and emptyLine to appropriate values for the top and bottom 2 lines of the box. The expression "-".repeat(message.length + 2) simply creates a string of message.size + 2 hyphens; combined with the + at the beginning and end of the string, this is just wide enough to draw the horizontal lines while leaving room for one blank on either side of the message.
// Further Exploration

// Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

// For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.


function logInBox(input, maxWidth = input.length) {
  let dashedLine = fillerLine(maxWidth, '+', '-');
  let spacedLine = fillerLine(maxWidth, '|', ' ');
  let userInputLine = inputLine(input, maxWidth);

  // let finalString = `${dashedLine}\n${spacedLine}\n${userInputLine}\n${spacedLine}\n${dashedLine}`;

  // console.log(finalString);
}


function fillerLine(inputLength, outerChar, innerChar) {
  let finalString = '' + outerChar;

  for (let idx = 0; idx < inputLength + 2; idx += 1) {
    finalString += innerChar;
  }

  return finalString + outerChar;
}

function inputLine(input, maxWidth) {
  // if (input.length >= maxWidth) {
  //   input = input.substring(0, maxWidth);
  // }
  
  let numInputLines = Math.floor(input.length / maxWidth);

  // put input string into array with numElements = numInputLines
  let stringArray = input.slice(0, numInputLines);

  console.log(stringArray);
  // line 1: '| ' + inputArray[0] + ' |'
  // line 1: '| ' + inputArray[1] + ' |'
  // line 1: '| ' + inputArray[2] + ' |'
  // line 1: '| ' + inputArray[3] + ' |'

  return '| ' + input + ' |';
}
