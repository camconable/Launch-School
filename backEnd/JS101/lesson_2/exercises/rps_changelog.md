# Feedback Changelog for Code Review: RPS with Bonus #

## User Experience and Gameplay ##

- [x] You could consider allowing uppercase entries for the selection 
  - **completed 10/25/23: added .toLowerCase() (line 102)**
- [x] On your play again message, I was able to enter yellow and nook and have them accepted as answers, you could look at how you could restrict this 
  - **completed 10/25/23- added isYes and isNo functions - might not be optimal checks; may need to revisit this**

## Source Code ##

- [x] If you wanted, you can eliminate the wantsToGoAgain function by returning true or false from askToRepeat and using that in your do while loop. This is personal preference though.
  - **completed 10/25/23**
- [x] I see that you are using an array for your VALID_CHOICES. This means that you need quite a few functions to parse the user's input and ensure that there are no conflicts. Can you think of how you might be able to use an object to store the choices and eliminate some of those functions?
  - **completed 10/26/23  - removed array and created VALID_CHOICES object. Inputs allowed are any of the keys or values in the object. Removed extraneous functions that find conflicts, parse user input, etc.**
- [x] Your userWon and computerWon functions contain a lot of conditionals, and duplication. Can you think how you might extract those combinations into a constant and use that to calculate a winner? 
  - **completed 10/25/23 - removed long list of IF conditionals, upgraded computeRoundWinner, put combinations into a 2d array constant. computeRoundWinner now cycles through the 2d array instead of checking all the IF conditionals**
- [x] Both of your computeRoundWinner and displayRoundWinner functions call the userWon and computerWon functions. Can you think of a way you could use the return value of computeRoundWinner inside displayRoundWinner?
  - **completed 10/25/23 - modified playRoundGetWinner to capture the return value of computeRoundWinner, changed function declaration of displayRoundWinner to pass in winner as an additional argument. Removed userWon and computerWon from displayRoundWinner since this is no longer necessary.**
- [x] When a functions needs both choices, it may be best to name the first one playerChoice or something similar to avoid confusion when using that inside the function
  - **completed 10/26/23  - changed choice variable to playerChoice in functions that use both choices**