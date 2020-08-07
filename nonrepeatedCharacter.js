/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var numTimesInString = {};
  for (character of string){
    if (!numTimesInString[character]) {
      numTimesInString[character] = 1;
    } else {
      numTimesInString[character] +=1;
    }
  }
  for (key in numTimesInString){
    if (numTimesInString[key] === 1){
      return key;
    }
  }
  return;
};

// console.log(firstNonRepeatedCharacter('AAB')); // => 'B'
// console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'