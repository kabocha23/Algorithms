// Given an m x n matrix, return all elements of the matrix in spiral order.

function spiralOrder(matrix: number[][]): number[] {
    let solution: number[] = [];
    while(matrix.length){
        let topRow: number[] = matrix.shift();
        solution.push(...topRow);
        
        for(let arr of matrix) {
            let right: number = arr.pop();
            if(right) {
                solution.push(right);
                arr.reverse();
            }
        }
        matrix.reverse();
    }
    return solution;
};