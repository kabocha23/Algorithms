// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
    let p1: number = 1;
    let p2: number = 1;
    let temp: number;
    
    for(let i = 0; i < n-1; i++){
        temp = p1;
        p1 = p1 + p2;
        p2 = temp;
    }
    
    return p1;
};