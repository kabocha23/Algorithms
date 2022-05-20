// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

function rob(nums: number[]): number {
    let money: number[] = [nums.length];
    
    money[0] = 0;
    money[1] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        money[i+1] = Math.max(money[i], money[i-1] + nums[i])
    }
    
    return money[nums.length];
};