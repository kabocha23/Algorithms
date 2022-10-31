// Leetcode 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// initialize variables for highest profit (0) and lowest buy price (first element)
// iterate starting at the second element
// if element is lower than lowest, set lowest to value
// otherwise calculate the profit of current element - lowest
// set maxProfit if larger 

const maxProfit = (prices: number[]): number =>{
    let maxProfit: number = 0;
    let lowest: number = prices[0];
    
    for(let i = 1; i < prices.length; i++) {

        if(prices[i] < lowest) {
            lowest = prices[i];
        } else if((prices[i] - lowest) > maxProfit) {
            maxProfit = prices[i] - lowest;
        }
    }
    return maxProfit;
};