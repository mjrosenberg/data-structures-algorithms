/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    S = S.replace(/a/g,'');
    S = S.replace(/e/g,'');
    S = S.replace(/i/g,'');
    S = S.replace(/o/g,'');
    S = S.replace(/u/g,'');
    return S;
};
