/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0){
        return false;
    }
    if (n === 1){
        return true;
    }
    while (n > 3){
        if(n%3 !== 0){
            return false;
        }
        n = n/3
    }
    if (n === 3){
        return true;
    }
    return false;
};
