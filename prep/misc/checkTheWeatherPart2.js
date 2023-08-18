// Check the Weather, Part 2

// Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.


let weather = 'foggy';

switch (weather) {
  case 'sunny':
    console.log(`It\'s a beautiful day!`);
    break;
  case 'rainy':
    console.log(`Grab your umbrella.`);
    break;
  case 'foggy':
    console.log(`Don\'t turn on your high beams!`);
    break;
  default:
    console.log(`Let\'s stay inside.`);
}