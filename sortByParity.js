/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let evens = [];
    let odds = [];
    for (let num of A) {
        if (num%2 === 0){
            evens.push(num);
        } else {
            odds.push(num);
        }
    }
    return evens.concat(odds);
};
