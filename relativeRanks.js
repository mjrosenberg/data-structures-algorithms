/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let tracker = {};
    for (let i = 0; i < nums.length; i++){
        tracker[nums[i]] = i;
    }
    let ans = [];
    // console.log(nums.sort(function(a,b){
    //     return b-a;
    // }), tracker);
    let sorted = nums.sort(function(a,b){
        return b-a;
    })
    for (let j = 0; j < sorted.length; j++){
        if (j === 0){
            ans[tracker[sorted[j]]] = 'Gold Medal';
        } else if (j === 1){
            ans[tracker[sorted[j]]] = 'Silver Medal';
        } else if (j === 2){
            ans[tracker[sorted[j]]] = 'Bronze Medal';
        } else {
            ans[tracker[sorted[j]]] = (j + 1).toString();
        }
    }
    return ans;
};
