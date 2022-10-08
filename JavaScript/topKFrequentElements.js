// Leetcode 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
    
    let hash = {};
    let sol = [];
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }
    console.log(hash)
    let entries = Object.entries(hash);
    let sorted = entries.sort((a,b) => b[1] - a[1])
    console.log(sorted)
    while(k > 0) {
        sol.push(sorted[j][0])
        k--;
        j++;
    }
    return sol;
};