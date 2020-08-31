/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let ans = [];
    for (let i = 0; i < A.length; i++){
        let num = 0;
        for (let j = i; j >= 0; j--){
            // console.log('i-j is', i-j);
            if (A[j] === 1){
                num += Math.pow(2,i-j);
            }
        }
        console.log(num, num%5);
        if (num%5 === 0){
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};
