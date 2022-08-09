function alternatingCharacters(s: string): number {
    let solution: number = 0;
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == s.charAt(i+1)){
            solution++;
        }
    }
    return solution;

}