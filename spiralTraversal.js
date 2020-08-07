/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  // TODO: Implement me!
  let width = matrix[0].length;
  let height = matrix.length;
  let maxWidth = width;
  let maxHeight = height;
  let minWidth = -1;
  let minHeight = 0;
  let currWidth = 0;
  let currHeight = 0;
  let total = 0;
  let ans = [];
  let dir = 'right';
  while(total < width*height){
    let currSquare = matrix[currHeight][currWidth];
    console.log('curr square is', currSquare, 'at height', currHeight, 'and width', currWidth);
    ans.push(currSquare);
    total += 1;
    if (dir === 'right'){
      if (currWidth + 1 < maxWidth){
        currWidth += 1;
      } else {
        currHeight += 1;
        dir = 'down'
        maxWidth = currWidth;
      }
    } else if (dir === 'down') {
      if (currHeight + 1 < maxHeight){
        currHeight += 1;
      } else {
        currWidth -= 1;
        dir = 'left'
        maxHeight = currHeight;
      }
    } else if (dir === 'left') {
      if (currWidth - 1 > minWidth){
        currWidth -= 1;
      } else {
        currHeight -= 1;
        dir = 'up'
        minWidth = currWidth
      }
    } else {
      if (currHeight - 1 > minHeight){
        currHeight -= 1;
      } else {
        currWidth += 1;
        dir = 'right'
        minHeight = currHeight;
      }
    }
  }
  return ans;
};


console.log(spiralTraversal([
  [1,2,3,10],
  [4,5,6, 11],
  [7,8,9, 12],
  [13,14,15,12]
]));