/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let good = false;
    while (!good){
        if (s.length <= 1){
            good = true;
        }
        for (let i = 1; i < s.length; i++){
            if (s[i-1].toLowerCase() === s[i].toLowerCase() && s[i-1] !== s[i]){
                s = s.slice(0,i-1) + s.slice(i+1, s.length);
                break;
            }
            if (i === s.length - 1){
                good = true;
            }
        }
    }
    return s;
};
