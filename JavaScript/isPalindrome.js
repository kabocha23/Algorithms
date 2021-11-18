// check if string is a palindrome
// not checking any non-alphanumeric chars

function palindrome(str) {
  // regex that applies to alphanumeric chars
  let regex = /[\W_]/g;
  // change all chars to lowercase, then replace non-alphanumeric chars with nothing
  let removeExtras = str.toLowerCase().replace(regex, '');
  // reverse string
  let reversed = removeExtras.split('').reverse().join('');
  // check if original string without extra is equal to reversed 
  return removeExtras == reversed;
}