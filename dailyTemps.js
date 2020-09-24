/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let ans = [];
    for (let i = 0; i < T.length; i++){
        let currTemp = T[i];
        for (let j = i+1; j < T.length; j++){
            if (currTemp < T[j]){
                ans.push(j-i);
                break;
            }
        }
        if (ans[i] === undefined){
            for (let k = i; k < T.length; k++){
                ans.push(0);
                break;
            }
        }
    }
    return ans;
};
