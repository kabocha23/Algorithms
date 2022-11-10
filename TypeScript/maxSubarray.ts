// leetcode 53. Maximum Subarray
// Given an integer array nums, find the subarray which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

// using kadane's algorithm, initialize current, global maxes and set them to the first element
// iterate through the array starting at the 2nd element
// check which is greater, the current element, or the last subarray + current element
// if the new current subarray is greater than the global, then set global to current subarr
// return global subarr  
const maxSubArray = (nums: number[]): number => {
    let maxCurrent: number = nums[0];
    let maxGlobal: number = nums[0];
    for(let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if(maxCurrent > maxGlobal) maxGlobal = maxCurrent;
    }
    return maxGlobal;
};