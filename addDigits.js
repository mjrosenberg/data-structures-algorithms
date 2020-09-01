/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numStr = num.toString();
    while(numStr.length > 1){
        let digits = numStr.split('');
        let sum = 0;
        for (let digit of digits){
            sum += parseInt(digit);
        }
        numStr = sum.toString();
    }
    return parseInt(numStr);
};
