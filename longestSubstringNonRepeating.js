var lengthOfLongestSubstring = function(s) {
    let currLen = 0;
    let max = 0;
    let currStart = 0;
    if (s.length === 1){
        return 1;
    }
    while (currStart < s.length - 1){
        // console.log('starting at index', currStart, s[currStart])
        let tracker = {};
        for (let i = currStart; i < s.length; i++){
            let curr = s[i];
            // console.log(curr, tracker[curr], currLen);
            if (tracker[curr] === undefined){
                tracker[curr] = true;
                currLen += 1;
                if (i === s.length -1){
                    if (currLen > max){
                        max = currLen;
                    }
                    currLen = 0;
                    currStart += 1;
                    return max;
                }
            } else {
                if (currLen > max){
                    max = currLen;
                }
                currLen = 0;
                currStart += 1;
                break;
            }
        }
    }
    return max;
};
