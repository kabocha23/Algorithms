// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.
// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example
// For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

// Input/Output
// [execution time limit] 4 seconds (js)

// [input] array.array.integer grid
// A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

// [output] boolean
// true if the given grid represents a correct solution to Sudoku, false otherwise.

function sudoku(grid) {
    
    function test(arr) {
        for (let i = 1; i <= 9; i++) {
            if (arr.indexOf(i) === -1) {
                return false;
            }
        }
        return true;
    }
    
    // test each row
    for(let j = 0; j < grid.length-1; j++){
        if(!test(grid[j])){
            console.log("Row is false");
            return false;
        }
    }
    
    // test each column
    let column = [];
    let a = 0;
    for(let j = 0; j < grid.length; j++){
        column.push(grid[j][a])
        if(j == grid.length-1){
            if(!test(column)){
                console.log("Column is false")
                return false;
            }
            if(j != 8 && a != 8){
                j = 0;
                a++;
            }
            column = [];
            a = 0;
        }
        console.log("column: " + column)

    }
    
    // test each sub-grid
    for(let k = 0; k < grid.length-2; k = k + 3){
        for(let l = 0; l < grid[k].length-2; l = l+3){
            let subGrid = [
                grid[k][l],
                grid[k][l+1],
                grid[k][l+2],
                grid[k+1][l],
                grid[k+1][l+1],
                grid[k+1][l+2],
                grid[k+2][l],
                grid[k+2][l+1],
                grid[k+2][l+2]
            ]
            console.log(subGrid)
            if(!test(subGrid)){
                console.log("subGrid is false")
                return false;
            }
        }
    }
    return true;
}