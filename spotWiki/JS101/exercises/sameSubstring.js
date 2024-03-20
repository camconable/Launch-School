// - Create a function that takes two strings as arguments and return a boolean value `true` if the second string has at least one leading substring that is the same as a leading substring in the first string. Substring is at least 2 char. For example:


sameSubstr('abcde', 'abiuop');// true => 'ab', 'ab'
sameSubstr('abcdefg', 'abcrfo'); // true => 'abc', abc'
sameSubstr('abcdefg', 'fabcdefg'); //false (not a leading substr)


// input: two strings
// output: boolean, true if 2nd str has >= 1 leading substring that's the same as leading substring in 1st string
// leading substring: first character(s) are the same in str1[0] and str2[0]

// initialize matchStr
// loop through str1
//   if str1[0] matches str2[0], concat to matchStr
//   if they don't match, break out
// coerce truthy/falsy matchStr to boolean

function sameSubstr(str1, str2) {
  let matchStr = '';
  for (let [idx, char] of str1.split('').entries()) {
    if (char === str2[idx]) matchStr += char;
  }
  return !!matchStr;
}