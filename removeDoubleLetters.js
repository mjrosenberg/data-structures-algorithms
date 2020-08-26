/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let duplicates = true;
    while(duplicates === true){
        let duplicated = false;
        if (S.length < 2){
            break;
        }
        for (let i = 0; i < S.length -1; i++){
            if (S[i] === S[i+1]){
                duplicated = true;
                SList = S.split('')
                SList.splice(i, 2)
                S = SList.join('');
            }
            if (i === S.length - 2 && duplicated === false){
                duplicates = false;
            }
        }
    }
    return S;
};
