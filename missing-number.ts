// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function missingNumber(nums: number[]): number {
    let length: number = nums.length;
    let total: number = (length * (length+1)) / 2;
    let sum: number = nums.reduce((a,b) => { 
        return a + b;
    });
    return total - sum;
};