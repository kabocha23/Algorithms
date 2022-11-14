// leetcode 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// keep a pointer at the beginning of every substring and iterate until a duplicate is seen
// then record the length of the substr from the pointer to index
// and move the pointer to the element after the duplicate
// initialize hash table to track the last time youve seen the char by index
// declare left pointer at 0
// create an array of chars from s
// declare max length at 0
// as we iterate through chars arr, declare lastSeenIdx to hash table of current element
// this means if the char is new, lastSeenIdx will be undefined
// otherwise it will equal the last index we saw this char
// windowContainsChar will return true if the lastSeenIdx has just been set to the current idx
// leftPointer will stay at it's current position if we havent seen the char
// or move to the next index if we have
// we then record this char and index in the hash table
// finally our window length will be the position of leftPointer to our current index + 1 (for 0 indexing)
// if the current window length is greater than the longest we've seen, then set maxLen to current window length

const lengthOfLongestSubstring = (s: string): number => {
    let dupeCheck: {[key:string]: number} = {};
    let leftPointer: number = 0;
    let s2: string[] = s.split("");
    let maxLen: number = 0;
    
    for(let i = 0; i < s2.length; i++) {
        const lastSeenIdx: number = dupeCheck[s2[i]];
        const windowContainsChar: boolean = lastSeenIdx >= leftPointer;
        
        leftPointer = windowContainsChar ? lastSeenIdx + 1 : leftPointer;
        dupeCheck[s2[i]] = i;
        
        const windowLen = (i - leftPointer) + 1;
        if(windowLen > maxLen) maxLen = windowLen;
    }
    return maxLen;
};

// alternative solution using Array.reduce() instead of for loop
const lengthOfLongestSubstring2 = (s: string): number => {
    let dupeCheck: {[key: string]: number} = {};
    // start of window
    let leftPointer: number = 0;
    // measure the length between current index and last seen index of char
    return s.split('').reduce((max, char, idx) => {
        // set lastSeenIdx to corresponding char in dupeCheck, or undefined if not seen yet
        const lastSeenIdx = dupeCheck[char];
        const windowContainsChar = lastSeenIdx >= leftPointer;
        // set leftPointer to the index after it was last seen, or keep it as is 
        leftPointer = windowContainsChar ? lastSeenIdx + 1 : leftPointer;
        // record the char and current index as last seen
        dupeCheck[char] = idx;
        // check length of left pointer to current index
        const windowLen = idx - leftPointer + 1;
        return Math.max(max, windowLen)
    },0)

};