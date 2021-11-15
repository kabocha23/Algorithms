function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // house boundaries at s and t; a = apple tree; b = orange tree
    let ahits:number = 0;
    let ohits:number = 0;
    for(let i = 0; i < apples.length; i++){
        if(a < s){
            if(apples[i] <= 0){
                continue;
            }else if((apples[i]+a) >= s && (apples[i]+a) <= t){
                ahits++;
            }
        } else if (a > t){
            if(apples[i] >= 0){
                continue;
            }else if((apples[i]+a) >= s && (apples[i]+a) <= t){
                ahits++;
            }
        }
    }
    for(let j = 0; j < oranges.length; j++){
        if(b < s){
            if(oranges[j] <= 0){
                continue;
            }else if((oranges[j]+b) >= s && (oranges[j]+b) <= t){
                ohits++;
            }
        } else if (b > t){
            if(oranges[j] >= 0){
                continue;
            }else if((oranges[j]+b) >= s && (oranges[j]+b) <= t){
                ohits++;
            }
        }
    }
    console.log(ahits);
    console.log(ohits);
}