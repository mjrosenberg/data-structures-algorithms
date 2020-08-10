/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) { 
        return []; 
    }
    if (numRows === 1) { 
        return [[1]]; 
    }
    let triangle = [[1],[1,1]];
    let i = 2;
    while (i < numRows){
        // console.log('i is', i);
        let newRow = [];
        for (let j = 0; j <= i; j++){
            // console.log('j is', j);
            if (j === 0 || j === i){
                newRow.push(1);
            } else {
                newRow.push(triangle[i-1][j-1] + triangle[i-1][j])
            }
            // console.log('newRow is', newRow);
        }
        triangle.push(newRow);
        i++;
    }
    return triangle;
};
