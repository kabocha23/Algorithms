// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]       
// Check out the image below for better understanding:


// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.boolean matrix

// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 5,
// 2 ≤ matrix[0].length ≤ 5.

// [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

function minesweeper(matrix) {
    let mines = [];
    for (let i = 0; i < matrix.length; i++){
        mines.push([]);
        for(let j = 0; j < matrix[i].length; j++){
            mines[i][j] = 0;
            //above
            if(matrix[i][j - 1] != undefined){
                if(matrix[i][j - 1] === true){
                    mines[i][j]++;
                }
            }
            //below
            if(matrix[i][j + 1] != undefined){
                if(matrix[i][j + 1] === true){
                    mines[i][j]++;
                }
            }
            //left
            if(matrix[i - 1] != undefined){
                if(matrix[i - 1][j] === true){
                    mines[i][j]++;
                }
            }
            //right
            if(matrix[i + 1] != undefined){
                if(matrix[i + 1][j] === true){
                    mines[i][j]++;
                }
            }
            //down right
            if(matrix[i + 1] != undefined){
                if(matrix[i + 1][j + 1] === true){
                    mines[i][j]++;
                }
            }
            //down left
            if(matrix[i + 1] != undefined){
                if(matrix[i + 1][j - 1] === true){
                    mines[i][j]++;
                }
            }
            //top right
            if(matrix[i - 1] != undefined){
                if(matrix[i - 1][j + 1] === true){
                    mines[i][j]++;
                }
            }
            //top left
            if(matrix[i - 1] != undefined){
                if(matrix[i - 1][j - 1] === true){
                    mines[i][j]++;
                }
            }
        }
    }
    return mines;
}