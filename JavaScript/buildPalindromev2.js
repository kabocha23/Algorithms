function createPalindrome(st) {
    // find the first occurence of the last letter in the string
    // create substring from index 0 to first occurring last letter
    // reverse and append
    let lastChar = st[st.length - 1];
    let index = st.indexOf(endChar);
    return st + st.substr(0, index).split('').reverse().join('');
}
function checkPal(st){
    const stLength = st.length;
    for(let i = 0; i < stLength/2; i++){
        if(st[i] != st[stLength-i-1]) return false;
    }
    return true;
}
function buildPalindrome(st) {
    if (checkPal(st)) {
        return st;
    } else {
        return createPalindrome(st);
    }
}
