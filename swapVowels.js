/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end){
        let currFront = s[start];
        let currBack = s[end];
        if (isVowel(currFront) && !isVowel(currBack)){
            end--;
        } else if (!isVowel(currFront) && isVowel(currBack)){
            start++;
        } else if (isVowel(currFront) && isVowel(currBack)){
            // console.log('both vowels', currFront, currBack)
            let sArr = s.split('');
            temp = sArr[start];
            sArr[start] = sArr[end]
            sArr[end] = temp;
            s = sArr.join('');
            start++;
            end--;
        } else{
            start++;
            end--;
        }
    }
    return s;
};
let isVowel = function(letter) {
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' ||letter === 'i' ||letter === 'o' ||letter === 'u'){
        return true;
    }
    return false;
}
