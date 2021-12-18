const lengthOfLongestSubstring = (s: string): number => {
    let dupeCheck: {[key: string]: number} = {};
    // start of window
    let leftPointer: number = 0;
    // measure the length between current index and last seen index of char
    return s.split('').reduce((max, char, idx) => {
        // set lastSeenIdx to corresponding char in dupeCheck, or undefined if not seen yet
        const lastSeenIdx = dupeCheck[char];
        const windowContainsChar = lastSeenIdx >= leftPointer;
        // set leftPointer to the index after it was last seen, or keep it as is 
        leftPointer = windowContainsChar ? lastSeenIdx + 1 : leftPointer;
        // record the char and current index as last seen
        dupeCheck[char] = idx;
        // check length of left pointer to current index
        const windowLen = idx - leftPointer + 1;
        return Math.max(max, windowLen)
    },0)

};
