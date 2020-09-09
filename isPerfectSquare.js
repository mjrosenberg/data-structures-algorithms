/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1){
        return true;
    }
    let half = num/2;
    let i = 2;
    let square = i*i;
    while (square < num){
        square = i*i;
        i++;
    }
    if (square === num){
        return true;
    }
    return false;
};
