// Leap Years (Part 2)

// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752,
//  which was a leap year. Prior to 1752, they used the Julian
//   Calendar. Under the Julian Calendar, leap years occur in
//    any year that is evenly divisible by 4.

// Using this information, update the function from the
// previous exercise to determine leap years both before and after 1752.

// Examples:

console.log(`2016 => ${isLeapYear(2016)}`);      // true
console.log(`2015 => ${isLeapYear(2015)}`);      // false
console.log(`2100 => ${isLeapYear(2100)}`);      // false
console.log(`2400 => ${isLeapYear(2400)}`);      // true
console.log(`240000 => ${isLeapYear(240000)}`);    // true
console.log(`240001 => ${isLeapYear(240001)}`);    // false
console.log(`2000 => ${isLeapYear(2000)}`);      // true
console.log(`1900 => ${isLeapYear(1900)}`);      // false
console.log(`1752 => ${isLeapYear(1752)}`);      // true
console.log(`1700 => ${isLeapYear(1700)}`);      // true
console.log(`1 => ${isLeapYear(1)}`);         // false
console.log(`100 => ${isLeapYear(100)}`);       // true
console.log(`400 => ${isLeapYear(400)}`);       // true

// PEDAC
// input: a number greater than 0
// output: boolean. true if leap year, false if not a leap year

function isLeapYear(year) {
  return year < 1752 ? leapYearJulian(year) : leapYearGregorian(year);
}

function leapYearJulian(year) {
  return year % 4 === 0;
}

function leapYearGregorian(year) {
  // work our way "up"
  // leap year is divisible by 4
  if (year % 4 === 0) {
    // false if also divisible by 100
    if (year % 100 === 0) {
      // true if it is also divisible by 400
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  // always return false if not divisible by 4
  return false;
}


// Further Exploration

// Find a web page that talks about leap years or the different
// calendar systems, and talk about the interesting information
// you learned. For instance, how was the change from the Julian
// calendar to the Gregorian calendar handled in your ancestral
// lands? Do they even use these calendar systems? If you live
// someplace that doesn't use the Gregorian calendar, tell us
// about your calendar system.

// Cam's answer: Hawaiians follow a lunar calendar and
// every lunar month is 29 days, 12 hours and 44 minutes
// instead of the 30 - 31 days of the gregorian month. The
// big island has the greatest number of documented calendars
// and the greatest number of climate zones, creating
// many different ecosystems. In many calendars, the year
// typically begins with the rainy season, around the gregorian march.
// Other notable Hawaiian calendars, like from the Native Hawaiian historian
// David Malo, begin in November

// Welehu – November
// Makaliʻi – December
// Kāʻelo – January
// Kaulua – February
// Nana – March
// Welo – April
// Ikiiki – May
// Kaʻaona – June
// Hinaiaʻeleʻele – July
// Mahoe Mua – August
// Mahoe Hope – September
// ʻIkuā – October

// Hawaiian lunar calendars are very precise in the way
// they divide and describe the three anahulu, or 10 day periods
// corresponding to the phases of the moon. Below are the
// first 4 days of the first anahulu:

// Hoʻonui – Growing Bigger

// - Hilo – “threadlike”
// - Hoaka – “crescent”
// - Kūkahi – The first day on which the moon is seen rising
//  while the sun is ascending
// - Kūlua – The second day on which the moon is seen rising
//  while the sun is ascending, lua also is “half” and this is a half moon