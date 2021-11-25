// Marc loves cupcakes, but he also likes to stay fit. 
// Each cupcake has a calorie count, and Marc can walk a distance to expend those calories. 
// If Marc has eaten  cupcakes so far, after eating a cupcake with  calories he must walk at least  miles to maintain his weight.

function cupcake(cakes:number,calories:number):number{
    return Math.pow(2,cakes)*calories;
}
function marcsCakewalk(calorie: number[]): number {
    calorie = calorie.sort((a,b) => {
        return b - a; 
    })
    let solution = 0;
    for(let i = 0; i < calorie.length; i++) {
        solution += cupcake(i,calorie[i])
    }
    return solution;
}