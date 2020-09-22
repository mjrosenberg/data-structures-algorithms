/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === 0){
        return '';
    }
    for (let i = 0; i < strs[0].length; i++){
        let letter = '';
        for (let string of strs){
            if (letter === ''){
                letter  = string[i];
            } else if (string[i] !== letter){
                return prefix;
            }
        }
        prefix += letter;
    }
    return prefix;
};
