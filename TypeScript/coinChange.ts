// leetcode 322. Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// bottom up approach starting from the smallest coin
// initialize a table to track the min amount of coins it takes to make up every amount up to the target amount
// the table will be length amount + 1, and filled with Infinity as the initial run will need to be below a max int
// set the first element of the table to zero to account for 0 index
// the first loop will iterate through each coin, while the nested loop will iterate through the table
// we are taking each coin and recording how many we will need to reach the amounts from 0 to 11
// if the coin value is less than or equal to the index (sub amount), then we'll set the index to: index - coin value
// this gives us the memoized amount of coins it took for the difference in amount
// then we'll set the potentialAmt to the memoized index in the table + 1
// table[this amount] will then be the smaller of potentialAmt or it's recorded value
// in short, we find the complementary coin value needed to complete the amount with the given coin value
// we look up the amount of coins it took to reach that complementary coin value and add 1
// then we look at which is less between that and the amount of coins for the current index
// example: 
// at the end of the first loop, with a coin value of 1, it will take 11 coins to reach an amount of 11
// on the second loop, with a coin value of 2, idx will be 11-2, potentialAmt will be table[9] + 1, table[11] = 5+1 or 11
// on the third loop, with a coin value of 5, idx will be 11-5, potentialAmt will be table[6] + 1, table[11] = 2+1 or 6

const coinChange = (coins: number[], amount: number): number => {
    const table: number[] = new Array(amount+1).fill(Infinity);
    table[0] = 0;
    
    for(let i = 0; i < coins.length; i++) {
        for(let j = 0; j < table.length; j++) {
            if(coins[i] <= j) {
                let idx: number = j - coins[i];
                let potentialAmt: number = table[idx] + 1;
                table[j] = Math.min(potentialAmt, table[j])
            }
        }
    }
    return table[table.length-1] === Infinity ? -1 : table[table.length-1];
};