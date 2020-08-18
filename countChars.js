/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let ans = 0;

    for (word of words){
        let charList = chars.split('');
        let good = false;
        for (let i = 0; i < word.length; i++){
            let char = word[i];
            if (!charList.includes(char)){
                break;
            } else {
                var index = charList.indexOf(char);
                if (index >= 0) {
                  charList.splice( index, 1 );
                }
            }
            if (i === word.length - 1){
                good = true
            }
        }
        if (good){
            ans += word.length;
        }
    }
    return ans;
};
