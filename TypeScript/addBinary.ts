// leetcode 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// the goal here is to iterate through each bit while both a and b, add them, carrying any oveflow to the next bit
// declare the answer string, var to store the carryover, the longer length of the two strings
// we'll start at the rightmost bit, so we set i to 1 and as we increment, we'll move left
// at the first bit, we convert the rightmost bit of a and b to a number, 1 or 0
// then we add the bits with carry
// if the sum is greater than 1, then carry will be 1, if not then 0
// then we add sum % 2 to the solution string, even numbers and 0 will result in 0, odd in 1
// after we exit the loop and still have a carry, we convert it to a string and add it to the solution

const addBinary = (a: string, b: string): string => {
    let sol: string = "";
    let carry: number = 0;
    let length: number = Math.max(a.length, b.length);
    
    for(let i = 1; i <= length; i++) {
        let x: number = Number(a[a.length - i] || 0);
        let y: number = Number(b[b.length - i] || 0);
        let sum: number = x + y + carry;
        
        carry = sum > 1 ? 1 : 0;
        sol = (sum % 2) + sol;
    }
    if(carry) sol = carry.toString(2) + sol;
    return sol;
};