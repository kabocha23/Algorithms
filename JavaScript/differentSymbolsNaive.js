// Given a string, find the number of different characters in it.

// Example

// For s = &quot;cabca&quot;, the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ s.length ≤ 1000.

// [output] integer

function differentSymbolsNaive(s) {
    let newS = (""+s).split('');
    let newArr = [];
    console.log(newS);
    
    for (let i = 0; i < newS.length; i++) {
        if (newArr.includes(newS[i]) === false) {
            newArr.push(newS[i]);
        }
    }
    return newArr.length;
}