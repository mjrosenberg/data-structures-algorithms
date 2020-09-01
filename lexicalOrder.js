/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let curr = 1;
    let nums = [];
    while(curr <= n){
        nums.push(curr.toString());
        curr++;
    }
    nums.sort();
    for (let num of nums){
        num = parseInt(num);
    }
    return nums;
};
