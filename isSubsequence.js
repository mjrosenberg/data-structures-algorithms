/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    for (let char of t){
        if (s[sIndex] === char){
            sIndex++;
        }
    }
    if (sIndex === s.length){
        return true;
    }
    return false;
}
