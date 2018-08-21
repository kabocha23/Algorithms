// Reverse the order of the bits in a given integer.

// Example

// For a = 97, the output should be
// mirrorBits(a) = 67.

// 97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

// For a = 8, the output should be
// mirrorBits(a) = 1.

function mirrorBits(a) {
  let answer = '';
  a = a.toString(2).split('');
  for(let i = a.length-1; i >= 0; i--) {
      answer += a[i]
  }
  return parseInt(answer, 2)
}