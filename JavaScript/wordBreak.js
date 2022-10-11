// Leetcode 139. Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false


// create a table containing an index for each letter in string s
// iterate through the table with nested loop, checking if the substring is in wordDict 
// use true to signal the index of the end of any valid subword
// the next nested loop starts at the end of each valid subword
// if the last character of string s is the end of a valid subword, then the subword before that is valid as well
// return the last result of the table


const wordBreak = (s, wordDict) => {
    const table = new Array(s.length + 1).fill(false);
    
    table[0] = true;

    for(let i = 0; i < table.length; i++) {
        if(table[i] === false) continue;
        for(let j = i+1; j < table.length; j++) {
            console.log(s.slice(i,j))
            if(wordDict.includes(s.slice(i,j))) {
                table[j] = true;
            }
        }
    }

    return table[table.length-1]
};