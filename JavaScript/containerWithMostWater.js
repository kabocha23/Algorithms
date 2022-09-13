// Leetcode 4. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

const maxArea = (height) => {
    let leftPointer = 0;
    let rightPointer = height.length-1;
    let maxArea = findArea(rightPointer, leftPointer, height);
    while(leftPointer < rightPointer) { 
        if(height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
        const currentArea = findArea(rightPointer, leftPointer, height)
        if(currentArea > maxArea) maxArea = currentArea;
    }
    
    return maxArea
};

const findArea = (rightPointer, leftPointer, height) => {
    const width = rightPointer - leftPointer;
    const length = Math.min(height[leftPointer], height[rightPointer])
    return width*length
};
