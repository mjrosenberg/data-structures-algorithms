/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absences = 0;
    let lates = 0;
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        if (char === 'A'){
            absences++;
            lates = 0;
        } else if (char === 'L'){
            lates++;
        } else {
            lates = 0;
        }
        if (absences > 1 || lates > 2){
            return false;
        }
    }
    return true;
};
