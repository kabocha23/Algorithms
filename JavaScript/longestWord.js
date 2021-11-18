// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string text

// Guaranteed constraints:
// 4 ≤ text.length ≤ 50.

// [output] string

// The longest word from text. It's guaranteed that there is a unique output.

function longestWord(text) {
    
    text = text.match(/[a-zA-Z]+/g);
    let longest = 0;
    const longestWordFunc = text.reduce((result='', current) => {
        if(current.length > longest){
            longest =  current.length;
            result = current;
        }
        return result;
    })
    
    return longestWordFunc;
    
}