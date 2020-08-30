/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x = [];
    let y = [];
    let ans = [];
    for (let i = 0; i < n; i++){
        x.push(nums[i]);
        y.push(nums[n+i]);
    }
    for (let j = 0; j < n; j++){
       ans.push(x[j]);
        ans.push(y[j]);
    }
    return ans;
};
