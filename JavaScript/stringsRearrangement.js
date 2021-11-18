// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;

// All rearrangements don't satisfy the description condition.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// Strings can be rearranged in the following way: "aa", "ab", "bb".
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array of strings of lowercase letters.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 15.

// [output] boolean

function stringsRearrangement(inputArray) {
    let canRearrange = createGraph(inputArray);
    for (var [key, value] of canRearrange) {
        let visitedSet = new Set();
        if (testGraph(key, canRearrange, 1, visitedSet)) {
            return true;
        }
    }
    return false;
}

function testGraph(start, list, counter, visited) {
    if (counter === list.size) return true;
    let status = false;
    let tempList = list.get(start);
    visited.add(start);
    if (tempList.length === 0) return false;
    for (let i = 0; i < tempList.length; i++) {
      if (!visited.has(tempList[i])) {
        let newVisited = new Set(visited);
        if (testGraph(tempList[i], list, counter + 1, newVisited)) {
          status = true;
        }
      }
    }
    return status;
}

function oneDifference(str1, str2) {
    let counter = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) counter++;
    }
    return counter === 1;
}

function createGraph(array) {
    let canRearrange = new Map();
    array.sort();
    for (let i = 0; i < array.length; i++) {
        canRearrange.set(i, []);
    }
    for (let j = 0; j < array.length - 1; j++) {
        for (let k = j + 1; k < array.length; k++) {
            if (oneDifference(array[j], array[k])) {
                canRearrange.get(j).push(k);
                canRearrange.get(k).push(j);
            }
        }
    }
    return canRearrange;
}