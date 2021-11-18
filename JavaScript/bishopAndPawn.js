// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

// Example
// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.

// For bishop = "h1" and pawn = "h3", the output should be
// bishopAndPawn(bishop, pawn) = false.

// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string bishop
// Coordinates of the white bishop in the chess notation.

// [input] string pawn
// Coordinates of the black pawn in the same notation.

// [output] boolean
// true if the bishop can capture the pawn, false otherwise.

function bishopAndPawn(bishop, pawn) {
    let board = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    }
    
    let bishopX = board[bishop[0]];
    let bishopY = parseInt(bishop[1]);
    
    let pawnX = board[pawn[0]];
    let pawnY = parseInt(pawn[1]);
    
    if(bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX){
        return true;
    }
    
    return false;
}
