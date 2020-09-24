/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let currSum = 0;
        let length = 0;
        for (let j = i; j < arr.length; j++){
            length++;
            currSum+= arr[j];
            if (length%2 === 1){
                sum+=currSum;
            }
        }
    }
    return sum;
};
