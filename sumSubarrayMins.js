/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++){
        let min;
        for (let j = i; j < A.length; j++){
            if (i === j){
                min = A[i];
            } else {
                // let subarray = A.slice(i, j+1);
                // console.log(subarray);
                if (A[j] < min){
                    min = A[j];
                }
            }
            sum += min; 
        }
    }
    return sum;
};
