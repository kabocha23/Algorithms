// leetcode 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// sort the array to better track which numbers have already been used
// we'll use three pointers to iterate through 
// as we iterate, we first check if i is past the first element, 
// and not the same element as before, otherwise we skip it
// we set j to the element after i, and k to the last element
// we start a loop where j and k do not intercept
// declare the sum of i, j, k
// if it equals 0, push to solution arr, then increment j and decrement k if the next element is the same value to skip them
// otherwise move on to the next iteration of j, k
// if sum is less than zero, then we know we need j to increase since the arr is sorted
// if the other conditions aren't met just decrement k
// when the loop ends we should have checked all non-duplicate trios

const threeSum = (nums: number[]): number[][] => {
    let sol: number[][] = [];
    if(nums.length === 0) return sol;
    
    nums = nums.sort((a: number, b: number): number => {
        return a-b;
    });
    for(let i = 0; i < nums.length-2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let j = i + 1;
        let k = nums.length-1;
        while(j < k) {
            let sum: number = nums[i] + nums[j] + nums[k];
            if(sum === 0) {
                sol.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k+1]) k--;
                j++;
                k--;
            } else if(sum < 0) {
                j++;
          } else {
              k--;
          }
        }
    }
    return sol;
}