/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let index1 = num1.length - 1;
    let index2 = num2.length - 1;
    let remainder = 0;
    let ans = '';
    while (index1 >= 0 && index2 >=0){
        let sum = parseInt(num1[index1]) + parseInt(num2[index2]) + remainder;
        if (sum > 9){
            sum = sum - 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        ans = sum.toString() + ans;
        index1 --;
        index2 --;
    }
    while (index1 >=0){
        let sum = parseInt(num1[index1]) + remainder;
        if (sum > 9){
            sum = sum - 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        ans = sum.toString() + ans;
        index1 --;
    }
    while (index2 >=0){
        let sum = parseInt(num2[index2]) + remainder;
        if (sum > 9){
            sum = sum - 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        ans = sum.toString() + ans;
        index2 --;
    }
    if (remainder > 0){
        ans = remainder.toString() + ans;
    }
    return ans;
};
