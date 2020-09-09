/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = false;
    if (x < 0){
        neg = true;
    }
    let xStr = x.toString();
    let ansStr = '';
    for (let i = xStr.length - 1; i >=0; i--){
        if (i === 0 && neg === true){
            break;
        }
        ansStr+= xStr[i];
    }
    let ans = parseInt(ansStr);
    if (ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)){
        return 0;
    }
    if (neg){
        return ans*-1;
    }
    return ans;
};
