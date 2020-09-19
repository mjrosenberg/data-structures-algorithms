/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let ans = [];
    let evenSum = 0;
    for (let val of A){
        if (val%2 === 0){
            evenSum += val;
        }
    }
    for (let i = 0; i < queries.length; i++){
        let query = queries[i];
        if (A[query[1]]%2 === 0){
            evenSum -= A[query[1]];
        }
        A[query[1]] = A[query[1]] + query[0];
        if (A[query[1]]%2 === 0){
            evenSum+= A[query[1]];
        }
        ans.push(evenSum);
    }
    return ans;
};
