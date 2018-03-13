// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example
// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string of lowercase letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

function isBeautifulString(inputString) {

    function count(char) {
        let occurences = 0;
        for(let letter of inputString){
            if(letter == char) occurences++;
        }
        return occurences;
    }
    
    function next(char) {
        // Decimal code of char at index specified
        let charCode = char.charCodeAt();
        // outputs a string from the utf-16 code(s)
        let nextCharCode = String.fromCharCode(charCode + 1);
        
        return nextCharCode;
    }
    
    let acsiiLimit = 123;
    
    for(let char = "a"; char <= "z"; char = next(char)){
        let charCount = count(char);
        if(charCount > limit) return false;
        limit = charCount;
    }
    return true;
}