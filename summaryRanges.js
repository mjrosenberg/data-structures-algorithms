/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    ranges = []
    if (nums.length === 0){
        return []
    }
    if (nums.length === 1){
        return [nums[0].toString()]
    }
    let start = nums[0]
    let end;
    let str = ''
    for (let i = 1; i < nums.length; i++){
        if (nums[i] - 1 === nums[i-1]){
            end = nums[i];
        } else {
            if (end !== undefined){
                str = `${start}->${end}`
            } else {
                str = start.toString();
            }
            ranges.push(str);
            start = nums[i];
            end = undefined
        }
    }
    if (end !== undefined){
        str = `${start}->${end}`
    } else {
        str = start.toString();
    }
    ranges.push(str);
    return ranges;  
};
