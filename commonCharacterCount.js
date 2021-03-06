// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase latin letters a-z.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase latin letters a-z.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// [output] integer

function commonCharacterCount(s1, s2) {
    s1 = s1.split("");
    console.log(s1);
    
    var s1Object = {};
    // iterate through array containing s1 letters
    for (var i = 0; i < s1.length; i++){
        if(s1Object.hasOwnProperty(s1[i]) === false){
            s1Object[s1[i]] = 1;
        }else{
            s1Object[s1[i]]++;
        }
        console.log(s1Object);
    }
    
    
    s2 = s2.split("");
    console.log(s2);
    
    var s2Object = {};
    // iterate through array containing s2 letters
    for (var i = 0; i < s2.length; i++){
        if(s2Object.hasOwnProperty(s2[i]) === false){
            s2Object[s2[i]] = 1;
        }else{
            s2Object[s2[i]]++;
        }
        console.log(s2Object);
    }
    
    console.log("Final for loop starts here");
    var total = 0;
    // iterate through hash table, checking if s1 and s2 keys match, if yes, take the lesser value and add it to the total
    for (var prop in s1Object){
      console.log("prop");
      console.log(prop);
        if(s2Object.hasOwnProperty(prop) === true){
            if(s2Object[prop] < s1Object[prop]){
                total += s2Object[prop];
                console.log(total);
            }else{
                total += s1Object[prop];
                console.log(total);
            }
        }
    }
    return total;
    
}
