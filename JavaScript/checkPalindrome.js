// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.

function checkPalindrome(inputString) {
    for(var a = 0; a < inputString.length/2; a++){
       for(var z = inputString.length-1; z > a; z--){
            if(inputString[a] == inputString[z]){
                a++;
            }else{
                return false;
            }
        } 
    }
    return true;
}