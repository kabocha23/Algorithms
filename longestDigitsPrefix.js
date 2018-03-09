// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString="123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 35.

// [output] string

function longestDigitsPrefix(inputString) {
    let newArr1 = [];
    for (let i = 0; i < inputString.length; i ++) {
        if(!isNaN(parseInt(inputString[i], 10))) {
            newArr1.push(inputString[i]);
        }else{
            return newArr1.join('');
        }
    }
    return newArr1.join('');
}
