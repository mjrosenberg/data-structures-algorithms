/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numList = num.toString().split('');
    for (let i = 0; i < numList.length; i++){
        if (numList[i] === '6'){
            numList[i] = '9';
            break;
        }
    }
    return parseInt(numList.join(''));
};
