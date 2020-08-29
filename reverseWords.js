/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sList = s.split(' ');
    let ans = [];
    for (let i = sList.length -1; i >=0; i--){
        if (sList[i] === ''){
            continue;
        }
        ans.push(sList[i]);
    }
    return ans.join(' ');
};
