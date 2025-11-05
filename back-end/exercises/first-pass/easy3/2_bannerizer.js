// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

logInBox('To boldly go where no one has gone before.', 18);

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

  let finalString = `${dashedLine}\n${spacedLine}\n${userInputLine}${spacedLine}\n${dashedLine}`;

  console.log(finalString);
}


function fillerLine(inputLength, outerChar, innerChar) {
  let finalString = '' + outerChar;

  for (let idx = 1; idx < inputLength + 3; idx += 1) {
    finalString += innerChar;
  }

  return finalString + outerChar;
}

function inputLine(input, maxWidth) {

  if (input) {
    let stringArray = [];

    for (let idx = 0; idx < input.length; idx += maxWidth) {
      stringArray.push(input.slice(idx, idx + maxWidth));
    }

    if (stringArray[stringArray.length - 1].length < maxWidth) {
      stringArray[stringArray.length - 1] = padLastLine(stringArray, maxWidth);
    }

    stringArray = addVertBars(stringArray);

    return buildInputString(stringArray);

  } else {
    return `|  |\n`;
  }
}

function padLastLine(stringArray, maxWidth) {
  let spacePadding = maxWidth - stringArray[stringArray.length - 1].length;
  const space = ' ';

  return stringArray[stringArray.length - 1].concat(space.repeat(spacePadding));
}

function addVertBars(stringArray) {
  for (let [idx, elem] of stringArray.entries()) {
    stringArray[idx] = `| ${elem} |`;
  }

  return stringArray;
}

function buildInputString(stringArray) {
  let inputLinesString = '';
  stringArray.forEach((elem) => {
    inputLinesString += elem + '\n';
  });

  return inputLinesString;
}