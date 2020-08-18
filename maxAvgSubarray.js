/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max;
    for (let i = 0; i <= nums.length-k; i++){
        let avg = 0;
        for (let j = i; j < i+k; j++){
            avg += nums[j];
        }
        avg = avg/k;
        if (max === undefined ||avg > max ){
            max = avg;
        }
    }
    return max;
};
