/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    let sLetters = {};
    let tLetters = {};
    for (let letter of s){
        if (!sLetters[letter]){
            sLetters[letter] = 1;
        } else {
            sLetters[letter]++;
        }
    }
    for (let letter of t){
        if (!tLetters[letter]){
            tLetters[letter] = 1;
        } else {
            tLetters[letter]++;
        }
    }
    for (let key in sLetters){
        if (!tLetters[key] || tLetters[key] !== sLetters[key]){
            return false;
        }
    }
    return true;
};
