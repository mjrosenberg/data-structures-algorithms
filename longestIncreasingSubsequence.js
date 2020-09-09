/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0){
        return 0;
    }
    let max = 1;
    for (let i = 0; i < nums.length - 1; i++){
        let length = 1;
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j-1] < nums[j]){
                length++;
            } else {
                break;
            }
        }
        if (length > max){
            max = length;
        }
    }
    return max;
};
