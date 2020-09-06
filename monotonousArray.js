/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let up;
    if (A.length <= 1){
        return true;
    }
    let prev = A[0];
    for (let i = 1; i < A.length; i++){
        if (up === undefined){
            if (A[i] > A[i-1]){
                up = true;
            } else if (A[i] < A[i-1]){
                up = false;
            }
        } else {
            if (up === true){
                if (A[i] < A[i-1]){
                    return false;
                }
            } else {
                if (A[i] > A[i-1]){
                    return false;
                }
            }
        }
    }
    return true;
};
