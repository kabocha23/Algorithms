// Leetcode 1143. Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:
// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// create a table (2d matrix) to track the comparison of each string's characters
// the first row and column of the table will be 0's to represent the start of a new subsequence
// iterate through text1 and text2 comparing chars, if the chars are equal, add 1 to the previous diagonal table element
// if not, take the max of the top and left elements of the table
// adding 1 to the diagonal element will keep track of the longest common subsquence
// return the last element of the matrix

const longestCommonSubsequence = (text1, text2) => {
    let table = Array.from(Array(text1.length+1), () => new Array(text2.length+1).fill(0))
    
    for(let i=1; i<=text1.length; i++) {
        for(let j = 1; j <= text2.length; j++) {
            console.log(text1[i-1], text2[j-1], table[i][j], table[i-1][j-1] +1)
            if(text1[i-1] === text2[j-1]) {
                table[i][j] = table[i-1][j-1] +1;
            } else {
                table[i][j] = Math.max(table[i-1][j], table[i][j-1])
            }
        }
        console.log(table)
    }
    
    return table[text1.length][text2.length]
};