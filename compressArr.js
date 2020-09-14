/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let length = 0;
    for (let i = 0; i < chars.length; i++){
        if (i === 0){
            length++;
        } else {
            if (chars[i] === chars[i-1]){
                length++;
            } else {
                if (length === 1){
                    length = 1;
                } else {
                    chars.splice(i-length+1, length-1, length.toString());
                    length = 1;
                }
            }
        }
    }
    if (length > 1){
        chars.splice((chars.length - length + 1) , length-1, length.toString());
    }
    // console.log(chars);
    return chars.length;
};
