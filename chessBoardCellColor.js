// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example
// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.


// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell1

// [input] string cell2

// [output] boolean

// true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1, cell2) {
    let row1 = cell1.split('')[1];
    console.log('row1 ' + row1);
    
    let row2 = cell2.split('')[1];
    console.log('row2 ' + row2);
    
    let col1 = parseInt((cell1.split('')[0]), 36) - 9;
    console.log('col1 ' + col1);
    
    let col2 = parseInt((cell2.split('')[0]), 36) - 9;
    console.log('col1 ' + col2);
    
    if(((row1 % 2) == (col1 % 2)) && ((row2 % 2) == (col2 % 2)) || ((row1 % 2) != (col1 % 2)) && ((row2 % 2) != (col2 % 2))) {
        return true;
    }else{
        return false;
    }
    
}