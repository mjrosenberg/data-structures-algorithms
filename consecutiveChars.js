/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
   let max = 0;
    let curr = '';
    let length = 0;
    for (let char of s){
        if (char === curr){
            length++;
        } else {
            curr = char;
            length = 1;
        }
        if (length > max){
            max = length;
        }
    }
    return max;
};
