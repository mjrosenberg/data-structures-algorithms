/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = 0;
    let tracker = {b:0, a:0, l:0, o:0, n:0};
    for (let char of text){
        if (tracker[char] >= 0){
            tracker[char]++;
        }
    }
    while (tracker['b'] > 0){
        if (tracker['b'] > 0){
            tracker['b'] --;
        } else {
            break;
        }
        if (tracker['a'] > 0){
            tracker['a'] --;
        } else {
            break;
        }
        if (tracker['l'] > 1){
            tracker['l'] -= 2;
        } else {
            break;
        }
        if (tracker['o'] > 1){
            tracker['o'] -= 2;
        } else {
            break;
        }
        if (tracker['n'] > 0){
            tracker['n']--;
        } else {
            break;
        }
        count++;
    }
    return count;
};
