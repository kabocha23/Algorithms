const isSquare = (n: number): boolean => {
    if(n === 0) {
        return true;
    } else if(n > 0 && Math.sqrt(n) % 1 === 0){
        return true;
    } else {
        return false;
    }
}