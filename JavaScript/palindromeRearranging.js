// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(inputString) {
    if(inputString.length < 2){
        return true;
    }
    let hash = {};
    for(var i = 0; i < inputString.length; i++){
        if(!hash[inputString[i]]){
            hash[inputString[i]] = 1; 
        }else{
            hash[inputString[i]] += 1;
        }
    }
    console.log(hash);
    let notPal = 0;
    for(let key in hash){
        if(hash[key] % 2 !== 0){
            notPal += 1;
        }
        if(notPal > 1){
            return false;
        }
    }
    return true;
}