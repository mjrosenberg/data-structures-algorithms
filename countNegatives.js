/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let negCount = 0;
    for (let row = grid.length - 1; row >=0; row--){
        for (let col = grid[row].length - 1; col >= 0; col--){
            if (grid[row][col] < 0){
                negCount++;
            } else {
                break;
            }
        }
    }
    return negCount;
};
