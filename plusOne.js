/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] < 9){
        digits[digits.length - 1]++;
        return digits;
    } else {
        let index = digits.length - 1;
        while (digits[index] >= 9){
            digits[index] = 0;
            if (index === 0){
                // console.log('digits is', digits);
                digits.unshift(1);
                break;
            }
            if (digits[index - 1] < 9){
                digits[index - 1]++;
                break;
            }
            index--;
        }
        return digits;
    }
};
