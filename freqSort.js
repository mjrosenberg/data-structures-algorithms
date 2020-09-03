/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freqs = {};
    for (let char of s){
        if (!freqs[char]){
            freqs[char] = 1;
        } else {
            freqs[char]++;
        }
    }
    let keysSorted = Object.keys(freqs).sort(function(a,b){return freqs[b]-freqs[a]});
    let ans = "";
    for (let key of keysSorted){
        while (freqs[key] > 0){
            ans+= key;
            freqs[key] --;
        }
    }
    return ans;
};
