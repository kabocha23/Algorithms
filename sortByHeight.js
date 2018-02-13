// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 5 ≤ a.length ≤ 15,
// -1 ≤ a[i] ≤ 200.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
  
    let sortedPeople = [];
    
    for (var t = 0; t < a.length; t++) {
        if(a[t] !== -1){
          sortedPeople.push(a[t]);
          console.log("people " + sortedPeople)
        }
    }
    
    sortedPeople.sort((a, b) => {
      return a - b;
    });
    console.log(sortedPeople);
    let ind = 0;
    for (var nt = 0; nt < a.length; nt++){
      if (a[nt] !== -1){
        a[nt] = sortedPeople[ind];
        ind++;
      }
    }
    return a;
}