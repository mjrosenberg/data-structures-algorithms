/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let tracker = {};
    for (let i = 0; i < mat.length; i++){
        let count = 0;
        for (let j = 0; j < mat[0].length; j++){
            count += mat[i][j];
        }
        tracker[i] = count;
    }
    let keysSorted = Object.keys(tracker).sort(function(a,b){return tracker[a]-tracker[b]});
    return keysSorted.slice(0, k);
};
