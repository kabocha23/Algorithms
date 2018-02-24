// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string st

// A string consisting of lowercase latin letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

function buildPalindrome(st) {
    function checkPal(st){
        const stLength = st.length;
        for(let i = 0; i < stLength/2; i++){
            if(st[i] != st[stLength-i-1]) return false;
        }
        return true;
    }
    
    let added = "";
    for(let letter of st){
        if(checkPal(st + added)) break;
        console.log("before " + letter)
        added = letter + added
        console.log("after " + added);
    }
    
    
    return st + added;
    
}
