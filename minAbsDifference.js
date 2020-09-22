/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let mins = [];
    let min;
    let curr;
    for (let i = 0; i < arr.length-1; i++){
        for (let j = i+1; j < arr.length; j++){
            if (!min || Math.abs(arr[i]-arr[j]) < min){
                min = Math.abs(arr[i]-arr[j]);
                mins = [];
                curr = [arr[i],arr[j]].sort();
                mins.push(curr);
            } else if (Math.abs(arr[i]-arr[j]) === min){
                curr = [arr[i],arr[j]].sort(function(a,b){return a-b});
                mins.push(curr);
            }
        }
    }
    return mins.sort();
};
