function twoSum(nums: number[], target: number): number[] {
    let hash: {[key:number]:number} = {};
    let solution: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        if(hash.hasOwnProperty(nums[i])){
            console.log("hash[nums[i] " + hash[nums[i]])
            solution.push(hash[nums[i]]);
            solution.push(i);
            return solution;
        };
        hash[target-nums[i]] = i;    
    };
};