/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ans = [];
    let tracker1 = {};
    let tracker2 = {};
    for (let num of nums1){
        if (!tracker1[num]){
            tracker1[num] = 1;
        }else {
            tracker1[num] += 1;
        }
    }
    for (let num of nums2){
        if (!tracker2[num]){
            tracker2[num] = 1;
        } else {
            tracker2[num] += 1;
        }
    }
    for (let num of nums1){
        if (tracker1[num] && tracker2[num]){
            let minTimes = Math.min(tracker1[num], tracker2[num]);
            tracker1[num] = undefined;
            tracker2[num] = undefined;
            while (minTimes > 0){
                ans.push(num);
                minTimes--;
            }
        }
    }
    return ans;
};
