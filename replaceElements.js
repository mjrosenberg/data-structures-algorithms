/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length === 1){
        return [-1];
    }
    for (let i = 0; i < arr.length - 1; i++){
        let localMax = arr[i+1];
        for (let j=i+1; j < arr.length; j++){
            if (arr[j] > localMax){
                localMax = arr[j];
            }
        }
        arr[i] = localMax;
    }
    arr[arr.length - 1] = -1;
    return arr;
};
