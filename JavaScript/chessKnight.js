// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be
// chessKnight(cell) = 2.

// For cell = "c2", the output should be
// chessKnight(cell) = 6.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string cell

// String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

// [output] integer

function chessKnight(cell) {
    let row = parseInt(cell[1], 10);
    let column = cell.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    let moves = [
      [-1, -2],
      [-2, -1],
      [2, -1],
      [1, -2],
      [1, 2],
      [2, 1],
      [-2, 1],
      [-1, 2]
    ];
    let answer = 0;
    let tmpRow;
    let tmpColumn;
    for(let i = 0; i < moves.length; i++){
        tmpColumn = column + moves[i][0];
        tmpRow = row + moves[i][1];
        if(tmpRow >= 1 && tmpRow <= 8 && tmpColumn >= 1 && tmpColumn <= 8 ){
            answer++;
        }
    }
    return answer;
}