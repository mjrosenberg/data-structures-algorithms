/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++){
        let oneCount = 0;
        let zeroCount = 0;
        let length = 0;
        for (let j = i; j < nums.length; j++){
            if (nums[j] === 0){
                zeroCount++;
            }
            if (nums[j] === 1){
                oneCount++;
            }
            if (oneCount === zeroCount){
                length = j - i + 1;
            }
        }
        if (length > max){
            max = length;
        }
        if (max === nums.length){
            return max;
        }
    }
    return max;
};
