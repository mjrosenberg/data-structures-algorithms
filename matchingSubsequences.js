/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    let ans = 0;
    for (word of words){
        let currIndex = 0;
        // let matches = true;
        for (let i = 0; i < S.length; i++){
            if (S[i] === word[currIndex]){
                currIndex++;
            }
        }
        if (currIndex === word.length){
            ans++;
        }
    }
    return ans;
};
