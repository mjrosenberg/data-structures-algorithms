/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let tracker = {};
    for (let i = 0; i < A.length; i++){
        if (!tracker[A[i]]){
            tracker[A[i]] = 1;
        } else {
            tracker[A[i]]++;
            if (tracker[A[i]] === A.length/2){
                return A[i];
            }
        }
    }
};
