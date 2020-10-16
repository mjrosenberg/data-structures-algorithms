/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let count = 0;
    if (nums.length < 3){
        return 0;
    }
    for (let i = 0; i < nums.length-2; i++){
        for (let j = i+1; j <nums.length-1; j++){
            for (let k = j+1; k <nums.length; k++){
                if (nums[i]+nums[j]+nums[k]< target){
                    count++;
                }
            }
        }
    }
    return count;
};
