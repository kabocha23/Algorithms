// Given two strings, determine if they share a common substring. A substring may be as small as one character.

function twoStrings(s1: string, s2: string): string {
    const subs = {} as any;
    for(let i = 0; i < s1.length; i++){
        subs[s1.charAt(i)] = i;
        if(subs.hasOwnProperty(s2.charAt(i))){
            return "YES";
        }
    }
    console.log(subs)
    return "NO";
}