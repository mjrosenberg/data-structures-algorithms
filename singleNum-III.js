/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let tracker = {};
    let ans = [];
    for (num of nums){
        if (!tracker[num]){
            tracker[num] = 1;
        } else {
            tracker[num]++;
        }
    }
    for (key in tracker){
        if (tracker[key] === 1){
            ans.push(key);
        }
    }
    return ans;
};
