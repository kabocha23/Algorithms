// initialize a hash table to keep track of 
// - the index and 
// - the compliment of the current element
// iterate through the array, check if the hash table contains the element
//  if not, store the current index and the difference between target the element
//  if the hash table contains the element (key), push the index (value), and current index (i)

const twoSum = (nums: number[], target: number): number[] => {
    let check: {[key:number]:number} = {};
    let sol: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        if(check.hasOwnProperty(nums[i])){
            sol.push(check[nums[i]]);
            sol.push(i);
            return sol;
        };
        check[target-nums[i]] = i;    
    };
    return sol;
};