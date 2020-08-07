/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var set = [''];
  //var breakLoop = false;
  // while(breakLoop === false){
  for (var k = 0; k < str.length; k++){
    var len = set.length;
    if (set.length === 1){
      for (var i = 0; i < str.length; i++){
        var char = str[i];
        set.push([char])
      }
    } else {
      for (var i = 0; i < str.length; i++){
        var char = str[i];

        for (var j = 1; j < len; j++){
          // console.log('j is', j);
          // console.log('char is', char);
          var item = [...set[j]];
          //var newArray = item;
          //console.log('item is', item)
          if (item.indexOf(char) === -1){
            //console.log('new array to append to the set', item.concat([char]));
            set.push(item.concat([char]).sort());
            //console.log('after push', set);
          }
        }
      }
    }
    // console.log('set is', set, 'at the end of the while');
    // console.log(k);
  }
  //console.log('outside');
  var uniq = [];
  for (list of set){
    //const list = set[w];
    //console.log(list);
    var joined = '';
    if (list.length === 1){
      joined = list[0];
    } else{
      // joined = Arrays.prototpe.join.call(item,'');
      for (item of list){
        joined = joined + item;
      }
    }
    //console.log(joined);
    // var joined = joined.join(list);
    if (uniq.indexOf(joined) === -1){
      uniq.push(joined);
    }
  }
  return uniq;
};

// console.log(powerSet("jump"));
//[ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]