/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let tracker = {};
    tracker[[0,0]] = 1;
    let curr = [0,0];
    for (let char of path){
        if (char === 'N'){
            curr[0] +=1;
        } else if (char === 'E'){
            curr[1] +=1;
        } else if (char === 'W'){
            curr[1] -= 1;
        } else if (char === 'S'){
            curr[0] -=1;
        }
        if (!tracker[curr]){
            tracker[curr] = 1;
        } else{
            tracker[curr]++;
            return true;
        }
    }
    return false;
};
