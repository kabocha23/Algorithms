// leetcode 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// declare a nested number array for the solution
// iterate through intervals
// if newInterval overlaps: check if the higher of the first elements is less than the lowr of the 2nd elements
// if so, set newInterval to [lower of first elements, higher of second elements]
// this makes newInterval take the lower and upper bound of newInterval and intervals[i]
// then check to see if the beginning of the next interval is greater than the end of newInterval
// if so, that means our newInterval is in the right place and 
// we can return sol(which includes untouched intervals), and the remaining slice of intervals
// if neither of these conditions exist, just push the interval to solution array as is
// when we exit the for loop, it means the newInterval did not find a spot within intervals arr
// so we add the newInterval to the end and return the solution array
const insert = (intervals: number[][], newInterval: number[]): number[][] => {
    let sol: number[][] = [];
    
    for(let i = 0; i < intervals.length; i++) {
        let interval: number[] = intervals[i];
        if(Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
            newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
            continue;
        }
        if(interval[0] > newInterval[1]) {
            sol.push(newInterval, ...intervals.slice(i));
            return sol;
        }
        sol.push(interval);
    }
    sol.push(newInterval);
    return sol;
};