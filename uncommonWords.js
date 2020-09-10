/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let words = {};
    for (let word of A.split(' ')){
        if (!words[word]){
            words[word] = 1;
        } else {
            words[word]++;
        }
    }
    for (let word of B.split(' ')){
        if (!words[word]){
            words[word] = 1;
        } else {
            words[word]++;
        }
    }
    let ans = [];
    for (let key in words){
        if (words[key] === 1){
            ans.push(key);
        }
    }
    return ans;
};
