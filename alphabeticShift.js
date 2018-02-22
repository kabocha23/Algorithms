// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = &quot;crazy&quot;, the output should be
// alphabeticShift(inputString) = &quot;dsbaz&quot;.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Non-empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 1000.

// [output] string

// The result string after replacing all of its characters.

function alphabeticShift(inputString) {
    let newStr = '';
    let zChar = (parseInt(inputString, 36) + 1 ) % 36;
    
    for (let i = 0; i < inputString.length; i++) {
        let zChar = (parseInt(inputString[i], 36) + 1 ) % 36;
        console.log(zChar);
        if(zChar == 0){
            newStr += (!zChar * 10 + zChar).toString(36)
        }else{
            newStr += String.fromCharCode(inputString.charCodeAt(i) + 1)
        };
    }
    return newStr;
}
