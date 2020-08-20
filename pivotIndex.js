/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++){
        let rightSum = 0;
        for (let j = i+1; j < nums.length; j++){
            rightSum += nums[j];
        }
        if (rightSum === leftSum){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
