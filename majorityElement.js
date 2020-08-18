/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = {}
    for (num of nums){
        if (!counter[num]){
            counter[num] = 1;
            if (counter[num] > nums.length/2){
                return num;
            }
        } else {
            counter[num]++
            if (counter[num] > nums.length/2){
                return num;
            }
        }
    }
};
