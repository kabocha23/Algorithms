// leetcode 409. Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// initialize a hash table to track char occurrences, and number to track letters available for palindrome
// iterate through string, add char and occurences in table, everytime the occurrence is even, add 2 to count
// since a palindrome can include a single char, check hash table and add 1 for any odd occurrences
const longestPalindrome = (s: string): number => {
    let letterCheck: {[key:string]: number} = {};
    let evenCount: number = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(letterCheck.hasOwnProperty(s[i])) {
            letterCheck[s[i]] += 1;
            if(letterCheck[s[i]] % 2 === 0) {
                evenCount += 2;
            }
        } else {
            letterCheck[s[i]] = 1;
        }
    }
    if(Object.values(letterCheck).some(val => val % 2 !== 0)) {
       evenCount += 1;
    }
    return evenCount;
};