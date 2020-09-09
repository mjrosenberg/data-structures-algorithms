/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        sums[i] = sum;
    }
    return sums;
};
