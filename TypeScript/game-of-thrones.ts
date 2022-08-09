// Dothraki are planning an attack to usurp King Robert's throne. 
// King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.
// But, to lock the door he needs a key that is an anagram of a palindrome. 
// He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome. 
// Given a string, determine if it can be rearranged into a palindrome. 
// Return the string YES or NO.

function gameOfThrones(s: string): string {
    const hash: {[key: string]: any} = {};
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(hash.hasOwnProperty(s.charAt(i))){
            hash[s.charAt(i)] += 1;
        } else {
            hash[s.charAt(i)] = 1;
        }
    }
    for (const k in hash) {
        if(hash[k]%2 !== 0) count++;
        if(count == 2) return "NO";
    }
    return "YES"
}