/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < i+k + 1; j++){
            if (Math.abs(nums[i] - nums[j]) <=t && i - j <= k ){
                return true;
            }
        }
    }
    return false;
};
