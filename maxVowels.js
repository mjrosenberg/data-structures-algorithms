/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = {a: true, e: true, i: true, o: true, u: true};
    let max = 0;
    for (let i = 0; i < s.length - k + 1; i++){
        let count = 0;
        for (let j = i; j < i + k; j++){
            if (vowels[s[j]]){
                count++;
            }
        }
        if (count > max){
            max = count;
        }
    }
    return max;
};
