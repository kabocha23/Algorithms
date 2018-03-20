// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

function deleteDigit(n) {
    let nArr = (''+n).split('');
    console.log(nArr)
    
    for(let i = 0; i < nArr.length; i++){
        if(i === nArr.length-1 || nArr[i] < nArr[i+1]){
            nArr.splice(i,1);
            console.log(nArr)
            return parseInt(nArr.join(''));
        }
    }

}