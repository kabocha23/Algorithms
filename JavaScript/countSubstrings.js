// Leetcode 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

const countSubstrings = (s) => {
  let count = 0;

  const palCheck = (str, low, high) => {
    while (low >= 0 && high <= str.length && str[low] === str[high]) {
      count += 1;
      low -= 1;
      high += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    palCheck(s, i, i);
    palCheck(s, i, i + 1);
  }

  return count;
};
