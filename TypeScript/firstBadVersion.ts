// leetcode 278. First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:
// Input: n = 1, bad = 1
// Output: 1

// we have n versions and know that the bad version is the mid point for bad to the right, good left
// set start and end to beginning and end of version list
// loop as long as start and end do not intersect
// set mid to sublist / 2, rounded up
// check if mid is bad and if one before mid is good, that means mid is the first bad
// else if mid is not bad set the sublist to look right
// else if mid is bad set the sublist to look left

const firstBadversion = (isBadVersion: any) => {

    return (n: number): number => {
        let start: number = 0;
        let end: number = n;
        
        while(start < end) {
            if(n === 1) return n;
            let mid: number = Math.ceil((start+end)/2)
            if(isBadVersion(mid) && !isBadVersion(mid-1)) {
                return mid;
            } else if(!isBadVersion(mid)) {
                start = mid;
            } else {
                end = mid;
            }
        }
        return start;
    };
};