/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 1;
    let max = n;
    let ans = n;
    let guessing = (num) => {
        let guessed = guess(num);
        if (guessed === 0){
            ans = num
            return;
        } else if (guessed === -1){
            max = num;
            guessing((min + num)/2)
        } else {
            min = num;
            guessing((max + num)/2)
        }
    }
    guessing((n+1)/2);
    return ans;
};
