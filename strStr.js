/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = -1;
    if (needle.length === 0){
        return 0;
    }
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === needle[0]){
            for (let j = i; j < i + needle.length; j++) {
                if (haystack[j] !== needle[j-i]){
                    break;
                }
                if (j === needle.length + i -1){
                    index = i;
                    return index;
                }
            }
        }
    }
    return index;
};
