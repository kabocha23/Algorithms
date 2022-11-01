// leetcode 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// create a copy of s, converting all chars to lowercase and taking only alphanumeric chars
// reverse the copy
// return the comparison
const isPalindrome = (s: string): boolean => {
    const forward: string = s.toLowerCase().replace(/[\W_]/g,'');
    const reverse: string = forward.split('').reverse().join('');
    
    return forward === reverse;
};