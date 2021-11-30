function miniMaxSum(arr: number[]): any {
    arr = arr.sort();
    let min = 0, max = 0;
    for(let i = 0; i < arr.length-1; i++) {
        min += arr[i];
    }
    for(let j = arr.length-1; j >= 1; j--) {
        max += arr[j];
    }
    console.log(min, max)
}