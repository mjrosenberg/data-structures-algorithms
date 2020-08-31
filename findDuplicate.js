/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let tracker = {};
    for (let num of nums){
        if (!tracker[num]){
            tracker[num] = true;
        } else {
            return num;
        }
    }
};
