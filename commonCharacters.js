/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  let chars1 = {};
  let chars2 = {};
  let commonChars = '';
  for (char of string1){
    chars1[char] = true;
  }
  for (char of string2){
    chars2[char] = true;
  }
  for (key of Object.keys(chars1)){
    if (chars2[key]){
      commonChars += key;
    }
  }
  return commonChars;
};

// console.log(commonCharacters('acexivou', 'aegihobuv'))
//  * Returns: 'aeiou'