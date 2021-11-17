/* Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. 
He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. 
The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.
Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No. */

function checkMagazine(magazine: string[], note: string[]): void {
    if(note.length > magazine.length){
        console.log("No");
        return;
    }
    
    const letters : { [key: string]: any } = {};
    
    for(let i = 0; i < magazine.length; i++){
        if(letters.hasOwnProperty(magazine[i])){
            letters[magazine[i]] += 1;
        }else{
            letters[magazine[i]] = 1;
        }
    }
    
    for(let j = 0; j < note.length; j++){
        if(letters.hasOwnProperty(note[j]) && letters[note[j]] > 0){
            letters[note[j]] -= 1;
            if(j == note.length-1){
                console.log("Yes")
                break;
            }
            continue;
        }else{
            console.log("No");
            break;
        }
    }
}