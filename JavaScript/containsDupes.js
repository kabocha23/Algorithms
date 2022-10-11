// Leetcode 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return false;
};