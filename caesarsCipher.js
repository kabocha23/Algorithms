// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function rot13(str) {
  let caps = {};
  for(let i = 65; i <= 77; i++) {
      caps[String.fromCharCode(i)] = String.fromCharCode(i+13);
  }
  let result = '';
  for(let j = 0; j < str.length; j++) {
      if(str.charCodeAt(j) < 65 || str.charCodeAt(j) > 90) {
          result += str[j];
      } else if(caps.hasOwnProperty(str[j])) {
          result += caps[str[j]];
          console.log(result)
      } else if(Object.values(caps).indexOf(str[j]) || Object.values(caps).indexOf(str[j]) === 0) {
          result += Object.keys(caps).find(key => caps[key] == str[j])
          console.log(result)    
      }
  }
  return result;
}