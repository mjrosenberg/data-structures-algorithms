/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (typed.length < name.length){
        return false;
    }
    let index = 0;
    let typedIndex = 0;
    while (index < name.length){
        console.log('name at index', index, 'is', name[index]);
        console.log('typed at index', typedIndex, 'is', typed[typedIndex]);
        if (typed[typedIndex] !== name[index]){
            return false;
        }
        while (typed[typedIndex] === name[index]){
            if (name[index + 1] && name[index + 1] === name[index]){
                typedIndex++;
                break;
            }
            typedIndex++;
        }
        index++;
    }
    if (typedIndex < typed.length){
       return false; 
    }
    return true;
};
