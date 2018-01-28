function checkPalindrome(inputString) {
    for(var a = 0; a < inputString.length/2; a++){
       for(var z = inputString.length-1; z > a; z--){
            if(inputString[a] == inputString[z]){
                a++;
            }else{
                return false;
            }
        } 
    }
    return true;
}