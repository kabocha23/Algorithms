const isAnagram = (s, t) => {
    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");
    
    return sortedS == sortedT;
};