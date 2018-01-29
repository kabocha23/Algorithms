// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

function isLucky(num) {
    var num2 = (""+num).split('').map(Number)
    console.log(num2);
    
    var num3 = num2.splice(0, Math.ceil(num2.length/2));
    console.log(Math.ceil(num2.length/2))
    console.log(num2);
    console.log(num3);
    
    var num2Sum = num2.reduce((a, b) => a + b);
    console.log(num2Sum);
    
    var num3Sum = num3.reduce((a, b) => a + b);
    console.log(num3Sum)
    
    if(num2Sum == num3Sum){
      return true;
    }else{
      return false;
    }
} 