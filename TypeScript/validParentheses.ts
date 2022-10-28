// Leetcode 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// initialize an empty stack
// create a hash table with each closing bracket:opening bracket
// iterate through string
// if current element is a closing bracket, check if the end of the stack has the matching opening bracket
// - if the matching open bracket is at the end of the stack, remove it
// - if not, the pattern is false
// else if current element is an opening bracket, add it to the stack

const isValid = (s: string): boolean => {
    if(s.length === 0) return true;
    if(s.length % 2 !== 0) return false;
    
    let stack: string[] = [];
    
    const pairs: {[key:string]: string} = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    
    for(let i = 0; i < s.length; i++) {
        let currentElement: string = s[i];
        let endOfStack: string = stack[stack.length-1];
        let currElPair: string = pairs[currentElement]
        
        if(currElPair) {
            if(currElPair === endOfStack) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(currentElement)
        }
    }
    return stack.length === 0;
};