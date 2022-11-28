// leetcode 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// we keep a pointer in front (low) and a pointer in back (high)
// every time we send a 0 to the front, we want to swap starting from the front and moving the low pointer inward
// similarly, we send 2's to the back moving the high pointer inward
// we only increment i if we do not send a number to high
// we do this because if we get a 2 sent to the front, we can send it back to the spot 1 position inward
const sortColors = (nums: number[]): void => {
    let low: number = 0, high: number = nums.length-1, i: number = 0;
    
    const swap = (a: number, b: number) => {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }
    
    while(i <= high) {
        if(nums[i] < 1) {
            swap(i++, low++);
        }else if(nums[i] > 1) {
            swap(i, high--);
        }else{
            i++;
        }
    }
};

// i  low high nums
// 0  0   5    before: 2,0,2,1,1,0
// 0  0   4    after: 0,0,2,1,1,2
// 0  0   4    before: 0,0,2,1,1,2
// 1  1   4    after: 0,0,2,1,1,2
// 1  1   4    before: 0,0,2,1,1,2
// 2  2   4    after: 0,0,2,1,1,2
// 2  2   4    before: 0,0,2,1,1,2
// 2  2   3    after: 0,0,1,1,2,2
// 2  2   3    before: 0,0,1,1,2,2
// 3  2   3    after: 0,0,1,1,2,2
// 3  2   3    before: 0,0,1,1,2,2
// 4  2   3    after: 0,0,1,1,2,2