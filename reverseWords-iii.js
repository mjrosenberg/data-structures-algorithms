/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = '';
    let sList = s.split(' ');
    for (let word of sList){
        for (let i = word.length -1; i>= 0; i--){
            ans += word[i];
        }
        ans+= ' ';
    }
    return ans.slice(0, ans.length - 1);
};
