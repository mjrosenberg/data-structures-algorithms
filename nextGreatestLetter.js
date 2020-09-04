/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let min;
    let minGreater;
    for (let letter of letters){
        if ((!minGreater || letter < minGreater) && letter > target ){
            minGreater = letter;
        } else if (!min || letter < min ){
                min = letter;
        }      
    }
    if (minGreater){
        return minGreater;
    }
    return min;
};
