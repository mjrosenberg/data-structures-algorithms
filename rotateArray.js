/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let curr = 0;
    while (curr < k){
        let newFront = nums.pop();
        nums.unshift(newFront);
        curr++;
    }
    return nums
};
