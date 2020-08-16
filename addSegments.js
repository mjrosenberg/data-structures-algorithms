/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.length === 0){
        return 0;
    }
    let count = 0;
    let increment = false;
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if(char === ' '){
            increment = true
        } else {
            if (i === 0){
                count += 1;
            }
            if (increment === true){
                count += 1;
            }
            increment = false;
        }
    }
    return count;
};
