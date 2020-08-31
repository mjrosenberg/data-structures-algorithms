/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let tracker = {};
    let ans = [];
    let nonIncluded = [];
    for (let num of arr1){
        if (!tracker[num]){
            tracker[num] = 1;
        } else {
            tracker[num]++;
        }
    }
    for (let num of arr2){
        if (tracker[num]){
            while(tracker[num] > 0){
                ans.push(num);
                tracker[num]--;
            }
        }
    }
    for (let key in tracker){
        if (tracker[key] > 0){
             while(tracker[key] > 0){
                nonIncluded.push(parseInt(key));
                tracker[key]--;
            }
        }
    }
    ans = ans.concat(nonIncluded.sort((a,b)=> a-b));
    return ans;
};
