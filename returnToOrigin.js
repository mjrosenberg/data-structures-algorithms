/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let xPos = 0;
    let yPos = 0;
    if (moves.length % 2 === 1){
        return false;
    }
    for (let letter of moves){
        if (letter === 'U'){
            yPos++;
        } else if (letter === 'D'){
            yPos--;
        } else if (letter === 'L'){
            xPos--
        } else if (letter === 'R'){
            xPos++;
        }
    }
    if (xPos === 0 && yPos === 0){
        return true;
    }
    return false;
};
