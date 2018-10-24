// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive integer.

// Guaranteed constraints:
// 1 ≤ n ≤ 400.

function isPower(n) {
  if(n == 1) return true;
  let newSet = new Set([1]);
  for(let i = 2; i * i <= 400; i++) {
      for(let j = 2; ; j++) {
          let powerOf = i ** j;
          if(powerOf > 400) break;
          if(powerOf == n) return true;
          newSet.add(powerOf);
      }
  }
  console.log(newSet)
  return false;
}