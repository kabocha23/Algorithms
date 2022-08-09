// Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.

function minimumAbsoluteDifference(arr: number[]): number {
    arr = arr.sort((a,b)=>{return a-b});
    console.log(arr)
    let solution = Math.abs(arr[0] - arr[1]);
    console.log(solution)
    for(let i = 1; i < arr.length-1; i++){
        if(Math.abs(arr[i] - arr[i+1]) < solution){
            solution = Math.abs(arr[i] - arr[i+1])
        }
        console.log(solution, Math.abs(arr[i] - arr[i+1]))
    }
    return solution;
    
}