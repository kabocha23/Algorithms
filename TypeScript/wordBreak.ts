// leetcode 139. Word Break
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

// the goal is to create a table that keeps track of which chars end with a string from wordDict
// we can then check to see if other words chain and end at the last char
// we create the table with the length+1 for 0 indexing, where each table element represents the position of each char
// we set the first table element to true since we are using false to signal that the string ending at thie char is not a match with wordDict
// so we have one pointer starting at the beginning, and another pointer that checksthe substring adding one char at a time
// if the substring is found in wordDict, we set the index of that char to true, so that we can start looking for the next string starting at that position
// after i to j checks the entire string, i moves to the char where the valid string ended
// the check continues, and eventually we will find that the last element of the table is true is the strings can be chained up to the last element in the table


const wordBreak = (s: string, wordDict: string[]): boolean => {
    const table:boolean[] = new Array(s.length+1).fill(false);
        
    table[0] = true;

    for(let i = 0; i < table.length; i++) {
        if(table[i] === false) continue;
        for(let j = i+1; j < table.length; j++) {
            if(wordDict.includes(s.slice(i,j))) {
                table[j] = true;
            }
        }
    }
    return table[table.length-1];
};

// console.log(i, j, table)
// 0 1 [
//     true,  false,
//     false, false,
//     false, false,
//     false, false,
//     false
//   ]
//   0 2 [
//     true,  false,
//     false, false,
//     false, false,
//     false, false,
//     false
//   ]
//   0 3 [
//     true,  false,
//     false, false,
//     false, false,
//     false, false,
//     false
//   ]
//   0 4 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   0 5 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   0 6 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   0 7 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   0 8 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   4 5 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   4 6 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   4 7 [
//     true,  false, false,
//     false, true,  false,
//     false, false, false
//   ]
//   4 8 [
//     true,  false, false,
//     false, true,  false,
//     false, false, true
//   ]