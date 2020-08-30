/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = [];
    let maxBit = Math.floor(Math.log2(num));
    while (maxBit >=0){
        if(Math.pow(2, maxBit) > num){
            bin.push(0);
        } else {
            bin.push(1);
            num -= Math.pow(2, maxBit);
        }
        maxBit--;
    }
    let complementBin = [];
    for (let i = 0; i < bin.length; i++){
        if (bin[i] === 1){
            complementBin[i] = 0;
        } else {
            complementBin[i] = 1;
        }
    }
    let ans = 0;
    let newMax = bin.length -1;
    while (newMax >= 0){
        if (complementBin[bin.length -1 - newMax] === 1){
            ans += Math.pow(2, newMax);
        }
        newMax--;
    }
    return ans;
};
