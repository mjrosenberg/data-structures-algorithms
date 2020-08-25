/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let rank = 1;
    // let arr2 = arr;
    let sorted = arr.concat().sort((a,b) => a-b);
    let tracker = {};
    let prev = arr[0];
    for (let i = 0; i < sorted.length; i++){
        let curr = sorted[i];
        if (i === 0){
            tracker[curr] = rank;
        } else {
            if (curr === sorted[i-1]){
                tracker[curr] = rank
            } else {
                rank++;
                tracker[curr] = rank;
            }
        }
    }
    for (let j = 0; j < arr.length; j++){
        let num = arr[j];
        arr[j] = tracker[num];
    }
    return arr;
};
