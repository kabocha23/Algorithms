// leetcode 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// initialize variables for start and end of nums array
// create a loop that stops when start > end
// initialize var for mid of start and end
// check if element is target
// if less than target, change end to element before mid
// if greater, change start to element after mid
// if loops ends without finding target, return -1

const binarySearch = (nums: number[], target: number): number => {
    let start: number = 0;
    let end: number = nums.length-1;
    
    while(start <= end) {
        let mid: number = Math.floor((start+end)/2);
        
        if(target == nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid-1;
        } else if(target > nums[mid]) {
            start = mid+1;
        }
    }
    return -1;
};