/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nStr = n.toString();
    let digits = nStr.split('');
    let sum = 0;
    let product = 1;
    for (let digit of digits){
        let num = parseInt(digit);
        sum += num;
        product *= num;
    }
    return product - sum;
};
