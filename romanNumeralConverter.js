// free code camp: JavaScript Algorithms and Data Structures Projects
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


function convertToRoman(num) {
  let romans = 
  { 
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 
    10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 
    100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 
    1000: 'M', 2000: 'MM', 3000: 'MMM', 4000: 'MMMM', 5000: 'MMMMM', 6000: 'MMMMMM', 7000: 'MMMMMMM', 8000: 'MMMMMMMM', 9000: 'MMMMMMMMM' 
  };
  
  // reverse num so we can work with the lowest place first
  let reverse = num.toString().split("").reverse();
  // tenths, hundredths, thousandths etc.
  let place = 1;
  // multiply each element by its place
  // replace each element with its value in romans hash
  for (let k = 0; k < reverse.length; k++) {
      reverse.splice(k, 1, reverse[k] * place);
      reverse[k] = romans[reverse[k]];
      place *= 10;
  };

  // reverse arr back to original order, return as a string
  return reverse.reverse().join("");
};