/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let tracker = {};
    let ans = [];
    for (let num of nums){
        if (!tracker[num]){
            tracker[num] = true;
        }
    }
    for (let i = 1; i <= nums.length; i++){
        if (!tracker[i]){
            ans.push(i);
        }
    }
    return ans;
};
