// What Century is That?

// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

function century(year) {
  let century = String(Math.ceil(year / 100));
  let tensPlaceNum = Number(century.charAt(century.length - 2));

  if (tensPlaceNum === 1) {
    century += 'th';
  } else if ([2, 3, 4, 5, 6, 7, 8, 9].includes(tensPlaceNum)
  || (!tensPlaceNum)) {
    let onesPlaceNum = Number(century.charAt(century.length - 1));
    if (onesPlaceNum === 1) {
      century += 'st';
    } else if (onesPlaceNum === 2) {
      century += 'nd';
    } else if (onesPlaceNum === 3) {
      century += 'rd';
    } else {
      century += 'th';
    }
  } 
  return century;
}