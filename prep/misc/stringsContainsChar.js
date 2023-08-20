// Contains Character

// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// METHOD 1
// let containsx = byteSequence.includes('x');
// console.log(containsx);

// METHOD 2
function containsxFunc(str) {
  for (let i = 1; i <= str.length; i += 1) {
    if (str.charAt(i) === 'x') {
      return `x was found at char #${i}`;
    }
  }
}

console.log(containsxFunc(byteSequence));