// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 5,
// 1 ≤ picture[i].length ≤ 5.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(picture) {
    let newPicture = [""];
    console.log(picture[0].length + 2)
    for (let i = 1;  i <= picture[0].length + 2; i++) {
        newPicture[0] += "*";
        if(picture[0]){
            newPicture[1] = "*" + picture[0] + "*";
        }
        if(picture[i]){
            newPicture[i+1] = "*" + picture[i] + "*";
        }
        newPicture[picture.length + 1] = newPicture[0];
    }
    return newPicture
}