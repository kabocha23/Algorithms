// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

const sym = () => {
    // convert arguments into an array
    const allArgs = [...arguments];
    // helper function to compare two arrays
    // check if each index of array 1 exists in array 2 or results. If not, add it to results.
    // perform the same check on array 2
    const getDiff = (arr1, arr2) => {
      let result = [];
  
      arr1.forEach((num) => {
        if(arr2.indexOf(num) < 0 && result.indexOf(num) < 0) {
          result.push(num)
        }
      });
  
        arr2.forEach((num) => {
        if(arr1.indexOf(num) < 0 && result.indexOf(num) < 0) {
          result.push(num)
        }
      });
  
      return result;
    }

    return allArgs.reduce(getDiff);
};
