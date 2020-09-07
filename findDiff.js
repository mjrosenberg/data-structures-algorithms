/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sList = s.split('').sort();
    let tList = t.split('').sort();
    for (let i = 0; i < tList.length; i++){
        if (!sList[i] || sList[i] !== tList[i]){
            return tList[i];
        }
    }
};
