/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first;
    let second;
    let third;
    for (let num of nums){
        if (!first || num > first){
            third = second;
            second = first;
            first = num;
        } else if (num === first){
            continue;
        } else if (!second || num > second){
            third = second;
            second = num;
        } else if (num === second){
            continue;
        } else if (!third || num > third){
            third = num;
        } else if (num === third){
            continue;
        } 
    }
    if (third !== undefined){
        return third;
    }
    return first;
};
