// leetcode 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// check if string s and t are the same length, else return false
// initialize a hash table
// iterate through first string, record the occurences of each char in hash table
// iterate through second string, decrement the value in hash if found
// if char is not found return false

const isAnagram = (s: string, t: string): boolean => {
    if(s.length !== t.length) return false;
    
    let charCheck: {[key: string]: number} = {};
    
    for(let i = 0; i < s.length; i++) {
        if(charCheck.hasOwnProperty(s[i])) {
            charCheck[s[i]] += 1;
        } else {
            charCheck[s[i]] = 1;
        }
    }
    for(let j = 0; j < t.length; j++) {
        if(charCheck[t[j]] > 0) {
            charCheck[t[j]] -= 1;
        } else {
            return false;
        }
    }
    return true;
};