/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let ans = '';
    let nums = [];
    let letters = [];
    for (let char of s){
        if (isNaN(parseInt(char))){
            letters.push(char);
        } else {
            nums.push(char);
        }
    }
    if (Math.abs(nums.length - letters.length) > 1){
        return ans;
    }
    if (nums.length >= letters.length){
        for (let i = 0; i < nums.length; i++){
            ans += nums[i];
            if (letters[i]){
                ans += letters[i];
            }
        }
    } else {
        for (let i = 0; i < letters.length; i++){
            ans += letters[i];
            if (nums[i]){
                ans += nums[i];
            }
        }
    }
    return ans;
};
