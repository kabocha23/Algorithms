// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

// A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.

// Example

// For n = 3 and m = 4, the output should be
// countBlackCells(n, m) = 6.

// There are 6 cells that have at least one common point with the diagonal and therefore are painted black.



// For n = 3 and m = 3, the output should be
// countBlackCells(n, m) = 7.

// 7 cells have at least one common point with the diagonal and are painted black.

function countBlackCells(n, m) {
  // find greatest common divisor of n and m
  let gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
  
  if (n == 1 || m == 1) {
      // if there is only 1 row and/or column, return the var that isn't 1
      return m * n;
  } else if (n == m) {
      // if the rows and/or columns are equal, the diag line runs through the middle
      // the diagonal line is == n or m
      // the two lines surrounding the diag line, have corners touching the diag line, each one square less than the diag line (n-1), times 2 
      return n + (n-1) * 2;
  } else {
      // using algorithm from https://www.cut-the-knot.org/Curriculum/Geometry/LineThroughGrid.shtml
      return n + m - gcd(n, m) + (gcd(n, m) - 1) * 2;
  }
}