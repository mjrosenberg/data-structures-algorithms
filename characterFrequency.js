/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let result = [];
  let obj = {};
  for (char of string){
    if (obj[char] === undefined){
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }
  let keySet = Object.keys(obj).sort(function(a,b){
    // console.log(a,b);
    if (obj[a] === obj[b]){
      // console.log('tied, both have val', obj[a]);
      return a.localeCompare(b);
    }
    return obj[b]-obj[a]
  });
  for (key of keySet){
    arr = [key, obj[key]];
    result.push(arr);
  }
  return result;
};

console.log(characterFrequency('miaaiaaippi'))
// [
//   ['a', 4],
//   ['i', 4],
//   ['p', 2],
//   ['m', 1]
// ]
// *
//      :: Example3 ::
// *
console.log(characterFrequency('mmmaaaiiibbb'));
// [
//   ['a', 3],
//   ['b', 3],
//   ['i', 3],
//   ['m', 3]
// ]