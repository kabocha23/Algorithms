// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

// Given two integers, find the result which the little boy will get.

// Note: the boy used this site as the source of knowledge, feel free to check it out too if you are not familiar with column addition.

// Example

// For param1 = 456 and param2 = 1734, the output should be
// additionWithoutCarrying(param1, param2) = 1180.

//    456
//   1734
// + ____
//   1180
// The little boy goes from right to left:

// 6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column
// 5 + 3 = 8
// 4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.
// There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

function additionWithoutCarrying(param1, param2) {
  let result = ''
  param1 = param1.toString().split('').reverse();
  param2 = param2.toString().split('').reverse();
  let j = 0;
  let paramDiff = param1.length - param2.length
  if(paramDiff > 0) {
      while(j < paramDiff) {
          param2.push('0');
          j++;
      };
  } else if(paramDiff < 0) {
      while(j < Math.abs(paramDiff)) {
          param1.push('0');
          j++;
      };
  }
  for(let i = 0; i < param1.length; i++) {
      let noCarry = (parseInt(param1[i]) + parseInt(param2[i])).toString();
      if(noCarry.length == 1) {
          noCarry = noCarry.substr(0,1)
      } else {
          noCarry = noCarry.substr(noCarry.length-1,1)
      }
      result = noCarry + result
  }
  return parseInt(result);
}
