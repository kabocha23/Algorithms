// letcode 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// iterate through the magazine and record the available letters, with values = occurrences
// iterate through ransom note and check if letters are available, decrementing as they occur
// if second iteration can't find occurrence then return false
const canConstruct = (ransomNote: string, magazine: string): boolean => {
    let letterCheck: {[key: string]: number} = {};
    
    for(let i = 0; i < magazine.length; i++) {
        if(letterCheck[magazine[i]] > 0) {
            letterCheck[magazine[i]] += 1;
        } else {
            letterCheck[magazine[i]] = 1;
        }
    }

    for(let j = 0; j < ransomNote.length; j++) {
        console.log(letterCheck[ransomNote[j]])
        if(letterCheck[ransomNote[j]] > 0) {
            letterCheck[ransomNote[j]] -= 1;
        } else {
            return false;
        }
    }
    return true;
};