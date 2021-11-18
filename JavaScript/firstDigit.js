// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be
// firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be
// firstDigit(inputString) = '0'.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string containing at least one digit.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] char

function firstDigit(inputString) {
    let newArr = (""+inputString).split("");
    console.log(newArr);
    for (let i = 0; i < newArr.length; i ++) {
        if(!isNaN(parseInt(newArr[i], 10))) {
            return newArr[i];
        }
    }
}
