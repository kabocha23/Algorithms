// Leetcode 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// create a hash table to store each element and its frequency
// convert the hash table to an array so it can be sorted by (key)value
// iterate again to add the k most frequent to solution array

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
    
    let entries = Object.entries(hash);
    let sorted = entries.sort((a,b) => b[1] - a[1])

    while(k > 0) {
        sol.push(sorted[j][0])
        k--;
        j++;
    }
    
    return sol;
};