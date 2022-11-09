// leetcode 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// use a Set to return false after the first duplicate
const containsDuplicate = (nums: number[]): boolean => {
    let dupeCheck = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(dupeCheck.has(nums[i])) {
            return true;
        } else {
            dupeCheck.add(nums[i])
        }
    }
    return false;
};

// use a hash table to do the same
const containsDuplicate2 = (nums: number[]): boolean => {
    let dupeCheck: {[key: string]: number} = {};
    for(let i = 0; i < nums.length; i++) {
        if(dupeCheck.hasOwnProperty(nums[i])) {
            return true;
        } else {
            dupeCheck[nums[i]] = 1;
        }
    }
    return false;
};