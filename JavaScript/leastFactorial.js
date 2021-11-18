// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

// Example

// For n = 17, the output should be
// leastFactorial(n) = 24.

// 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

function leastFactorial(n) {
  let num = 1;
  if(n == 1){
      return 1;
  } else {
      for(let i = 2; i <= 10; i++) {
          num *= i;
          console.log(num);
          if(num >= n) return num;
      }        
  }
}
