// Your code goes here

// input: length, width (both numbers)

// output: area in m^2 and ft^2
// 1 square meter == 10.7639 square feet

// validation not needed

const SQMETERSTOFEET = 10.7639;
const rlSync = require('readline-sync');

function getAreas(length, width) {
  const area = length * width;
  return [area, area * SQMETERSTOFEET];
}

console.log('Enter the length of the room in meters: ');
const length = Number(rlSync.prompt());
console.log('Enter the width of the room in meters: ');
const width = Number(rlSync.prompt());

const [areaMeters, areaFeet] = getAreas(length, width);

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);