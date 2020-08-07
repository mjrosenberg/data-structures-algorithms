/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // Your code here.
  console.log(mapStr);
  if (mapStr.length === 0){
    return 0;
  }
  let count = 0;
  let strArr = mapStr.split('\n');
  let map = [];
  for (str of strArr){
    arr = str.split('');
    map.push(arr);
  }
  // console.log(map);
  for (let i = 0; i < map.length; i++){
    for (let j = 0; j < map[0].length; j++){
      if (map[i][j] === '0'){
        fillInIsland(i, j, map);
        count ++;
      }
    }
  }
  // console.log(map, count);
  return count;
}

function fillInIsland(x, y, map) {
  if (x < 0 || x >= map.length || y < 0 || y >= map[0].length){
    return;
  }
  let curr = map[x][y];
  // console.log('curr is', curr, 'at x=', x, 'and y=', y);
  if (curr !== '0'){
    return;
  }
  map[x][y] = 1;
  fillInIsland(x, y+1, map);
  fillInIsland(x+1, y, map);
  fillInIsland(x, y-1, map);
  fillInIsland(x-1, y, map);
}
console.log(countIslands('.00\n0.0\n00.'));
let inputs = ['.0...\n.00..\n....0', '..000.\n..000.\n..000.\n.0....\n..000.', '..000.\n..0...\n..0.0.\n..0...\n..000.', '0....0\n......\n..00..\n......\n0....0', '00...0\n0...00\n......\n0.0.0.\n0.....', '0...0\n0...0\n00000', '0...0\n..0..\n0...0', '.', '0', '...\n..0\n.00', '.....\n..0..\n.000.\n..0..\n.....', '00..00\n..00..\n00..00\n..00..']

for (let input of inputs){
  console.log(countIslands(input));
}