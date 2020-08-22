/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min;
    for (num of nums){
        if (min === undefined){
            min = num
        } else if (num < min){
            min = num;
        }
    }
    return min;
};
