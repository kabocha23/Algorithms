// Leetcode Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.


const getSum = (a,b) => {
    let carry;
    while((a & b) !== 0) {
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a ^ b;
}


