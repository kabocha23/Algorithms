function isPalindrome(s: string): boolean {
    const forward = s.toLowerCase().replace(/[\W_]/g,'');
    const reverse = forward.split('').reverse().join('');
    
    return forward === reverse;
};