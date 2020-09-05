/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let length;
    for (let i = 0; i < nums.length; i++){
        let sum = 0;
        let curr = i;
        while (sum < s){
            sum += nums[curr];
            curr++;
            if (curr === nums.length){
                break;
            }
        }
        if (sum >= s && (!length || curr - i < length )){
            length = curr - i;
        }
    }
    return length || 0;
};
