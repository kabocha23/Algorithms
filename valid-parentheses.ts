// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isValid(s: string): boolean {
    if(s.length === 0) return true;
    if(s.length % 2 !== 0) return false;
    
    let stack: string[] = [];
    const pairs: {[key: string]:string} = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    
    for(let i = 0; i < s.length; i++){
        let curr: string = s[i];
        let stackEnd: string = stack[stack.length-1];
        let currPair: string = pairs[curr];
        
        if(currPair){
            if(currPair === stackEnd){
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(curr);
        }
    }
    return stack.length === 0;
};