// leetcode 169. Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// initialize a hash to store elements and their occurrences, and a var for max occurrences
// return element with max occurrences
const majorityElement = (nums: number[]): number => {
    let majorCheck: {[key:number]: number} = {};
    let major: number = 0;
    let majorMax: number = 0;
    
    if(nums.length === 1) return nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        if(majorCheck.hasOwnProperty(nums[i])) {
            majorCheck[nums[i]] += 1;
            if(majorCheck[nums[i]] > majorMax) {
                major = nums[i];
                majorMax = majorCheck[nums[i]];
            }
        } else {
            majorCheck[nums[i]] = 1;
        }
    }
    
    return major;
};

// refactored: instead of going through the entire array, immediately return the element that surpasses n/2
const majorityElement2 = (nums: number[]): number => {
    let majorCheck: {[key:number]: number} = {};
    
    if(nums.length === 1) return nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        if(majorCheck.hasOwnProperty(nums[i])) {
            majorCheck[nums[i]] += 1;
            if(majorCheck[nums[i]] > nums.length/2) {
                return nums[i]
            }
        } else {
            majorCheck[nums[i]] = 1;
        }
    }
    
    return 0;
};