/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //check each prefix and remove a multiple of it from both strings, if one string is not empty then it is not right
    let minlen;
    let prefix = '';
    let gcd = '';
    if (str1.len <= str2.length){
        minlen = str1.length
    } else {
        minlen = str2.length;
    }
    for (let i = 0; i < minlen; i++){
        if (str1[i] !== str2[i]){
            return gcd;
        } else {
            prefix += str1[i];
            let newStr1 = str1.split(prefix).join('');
            let newStr2 = str2.split(prefix).join('');
            if (newStr1 !== '' || newStr2 !== ''){
                continue;
            } else 
                gcd = prefix;
                // console.log('changing gcd to', gcd)
            }
        }
    }
    return gcd;
};
