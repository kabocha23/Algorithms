function birthdayCakeCandles(candles: number[]): number {
    let count: number = 1;
    candles.sort((a,b) => {
        return b-a;
    })
    console.log(candles)
    for(let i = 0; i < candles.length; i++) {
        if(candles[i] == candles[i+1]) {
            count++;
        } else {
            return count;
        }
    }
    return count;
}