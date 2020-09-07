/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let unique = {};
    for (let i = 0; i < s.length; i++){
        let char = s[i]
        if (!unique[char]){
            unique[char] = [true,i];
        } else {
            unique[char][0] = false;
        }
    }
    for (let key in unique){
        if (unique[key][0] === true){
            return unique[key][1];
        }
    }
    return -1;
};
