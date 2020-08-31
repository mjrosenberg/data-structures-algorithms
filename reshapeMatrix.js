/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let rowIndex = 0;
    let cIndex = 0;
    let mRowIndex = 0;
    let mColIndex = 0;
    let ans = [];
    if (r*c !== nums[0].length*nums.length){
        return nums;
    }
    while (rowIndex < r){
        let row = []
        while (cIndex < c){
            row.push(nums[mRowIndex][mColIndex]);
            if (mColIndex < nums[0].length -1){
                mColIndex++
            } else {
                mRowIndex++;
                mColIndex = 0;
            }
            cIndex++
        }
        ans.push(row);
        rowIndex++;
        cIndex = 0;
    }
    return ans;
};
