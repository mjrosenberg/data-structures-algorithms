/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let element = 0;
    let count = 0;
    let i = 0;
    while(i < nums.length){
        if (nums[i] === element){
            if (count >= 2){
                nums.splice(i, 1);
            } else {
                count++;
                i++;
            }
        } else {
            element = nums[i];
            count = 1;
            i++;
        }
    }
    // return nums;
};
