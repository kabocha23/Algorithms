// iterate through string, with i being the middle element
// for every element, helper function checks if elements to the right and left are equal
// if not, expand left and right by 1
//helper function return longest palindrome substr
// main function checks if longer than the current longest substr
const longestPalindrome = (str) => {

    if(str.length === 0 || str === null) return '';
    
    let longestPal = '';
    
    for(let i = 0; i < str.length; i++) {
        
        let oddPal = expandFromCenter(str, i, i)
        let evenPal = expandFromCenter(str, i-1, i)
        
        
        if(oddPal.length > longestPal.length) {
            longestPal = oddPal
        } else if(evenPal.length > longestPal.length) {
            longestPal = evenPal
        }
    }
    
    return longestPal;
};

const expandFromCenter = (str, left, right) => {
    let j = 0;
    while(str[left-j] && str[left-j] === str[right + j]) {
        j++
    }
    j--;
    
    return str.slice(left - j, right + j + 1)
}
