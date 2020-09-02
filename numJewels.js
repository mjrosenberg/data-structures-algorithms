/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let tracker = [];
    for (let jewel of J){
        tracker[jewel] = true;
    }
    let count = 0;
    for (let char of S){
        if (tracker[char]){
            count++;
        }
    }
    return count;  
};
