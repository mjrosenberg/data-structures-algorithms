/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort(function(a,b){return a-b});
    let curr = 0;
    for (let num of nums){
        if (num !== curr){
            return curr;
        }
        curr++;
    }
    return curr;
};
