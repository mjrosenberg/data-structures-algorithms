/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let tracker = {};
    let count = 0;
    for (let num of arr){
        if (!tracker[num]){
            tracker[num] = 1; 
        } else {
            tracker[num]++;
        }
    }
    // console.log(tracker);
    for (let key in tracker){
        let intkey = parseInt(key)
        let checkkey = intkey + 1
        if (tracker[checkkey]){
            count+= tracker[intkey];
        }
    }
    return count;
};
