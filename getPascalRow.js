/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0){
        return [1];
    } else if (rowIndex === 1){
        return [1,1];
    }
    let prevRow = [1,1];
    let currRow = [];
    let currIndex = 2;
    while(currIndex <= rowIndex){
        currRow = [1];
        for (let i = 1; i < currIndex; i++){
            currRow[i] = prevRow[i-1] + prevRow[i];
        }
        currRow.push(1);
        prevRow = currRow;
        currIndex++;
    }
    return currRow;  
};
