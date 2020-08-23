/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let single = 0;
    let index = 0;
    while(index < nums.length){
        if (index === nums.length - 1){
            if (nums[index] !== nums[index-1]){
                return nums[index];
            }
            index++;
        } else if (index === 0){
            if (nums[index] !== nums[index+1]){
                return nums[index];
            } else{
                index +=2
            }
        } else {
            if (nums[index] !== nums[index-1] && nums[index] !== nums[index+1]){
                return nums[index];
            } else {
                index += 2;
            }
        }
    }
};
