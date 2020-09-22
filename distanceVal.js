/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for (let element of arr1){
        let ok = 0;
        for (let item of arr2){
            if (Math.abs(element-item) > d){
                ok++;
            } else {
                break;
            }
        }
        if (ok === arr2.length){
            count++;
        }
    }
    return count;
};
