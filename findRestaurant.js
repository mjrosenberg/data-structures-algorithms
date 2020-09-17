/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let t1 = {};
    let t2 = {};
    for (let i = 0; i < list1.length; i++){
        t1[list1[i]] = i;
    }
    for (let i = 0; i < list2.length; i++){
        t2[list2[i]] = i;
    }
    // console.log(t1, t2);
    let ans = [];
    let minSum;
    for (let i = 0; i < list1.length; i++){
        // console.log(list1[i],t1[list1[i]], t2[list1[i]] )
        if (t1[list1[i]] !== undefined && t2[list1[i]] !== undefined){
            let sum = t1[list1[i]] + t2[list1[i]]
            // console.log(sum, list1[i], minSum);
            if (minSum === undefined || sum < minSum) {
                ans = [list1[i]];
                minSum = sum;
            } else if (sum === minSum){
                ans.push(list1[i]);
            }
        }
    }
    return ans;
};
