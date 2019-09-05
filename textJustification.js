// Given an array of words and a length l, format the text such that each line has exactly l characters and is fully justified on both the left and the right. Words should be packed in a greedy approach; that is, pack as many words as possible in each line. Add extra spaces when necessary so that each line has exactly l characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text and lines with one word only, the words should be left justified with no extra space inserted between them.

// Example

// For
// words = ["This", "is", "an", "example", "of", "text", "justification."]
// and l = 16, the output should be

// textJustification(words, l) = ["This    is    an",
//                                "example  of text",
//                                "justification.  "]

// add more spaces to the first gap
// iterate through spaces

function textJustification(words, l) {
  // arr to hold final answer
  let lines = [];
  let index = 0;
  
  while(index < words.length) {
    // char count for word at current index
    let currentCharTotal = words[index].length;
    let nextIndex = index + 1;
    
    while(nextIndex < words.length) {
      // break if adding next word + space makes charTotal > l
      if((currentCharTotal + words[nextIndex].length + 1) > l) {
        break;
      }else{
        // if not then add to charTotal
        currentCharTotal += words[nextIndex].length + 1;
      }
      // increment nextIndex until it reaches the end of line
      nextIndex++;
    }
    
    let line = '';
    // number of words in the line
    let diff = nextIndex - index - 1;
      
    // check for only one word or last word
    if(nextIndex == words.length || diff === 0) {
      // add each word and a space
      for(let i = index; i < nextIndex; i++) {
        line += words[i] + ' ';
      }
      // remove space after last word
      line = line.substr(0, line.length - 1);
      // fill rest of line with spaces
      for(let j = line.length; j < l; j++) {
        line += ' ';
      }
    
    } else {
      // more than one word in line, or before last word
      // spaces already in line
      let numOfSpaces = (l - currentCharTotal) / diff;
      // spaces that need to be added
      let remainder = (l - currentCharTotal) % diff;
      
      for(let k = index; k < nextIndex; k++) {
        line += words[k];
        // if k is before the last word of the line
        if(k < nextIndex - 1) {
          let spacesToFill = numOfSpaces + ((k - index) < remainder ? 1 : 0);
          for(let m = 0; m <= spacesToFill; m++) {
            line += ' ';
          }
        }
      }
    }
    lines.push(line);
    index = nextIndex;
  }
  return lines;
}
