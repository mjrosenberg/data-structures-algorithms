/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};
//var overall = [];
var telephoneWords = function(digitString) {
//TODO: return every combination that can be spelled on a phone with these digits
  // combos = [];
  // if (digitString.length === 1){
  //   var ans = [];
  //   var letters = phoneDigitsToLetters[digitString];
  //   for (letter of letters){
  //     console.log('letters associated with', digitString, 'are:', phoneDigitsToLetters[digitString]);
  //     ans.push(letter);
  //     //console.log('one digit', ans, letter);
  //   }
  //   return ans;
  // }
  // var firstDigit = digitString.slice(0,1);
  // var restOfString = digitString.slice(1,digitString.length);
  // var firstDigitLetters = phoneDigitsToLetters[firstDigit];
  // console.log("first digit", firstDigit, 'letters associated with the digit', firstDigitLetters, 'rest of the string',restOfString);
  // for (let i = 0; i< firstDigitLetters.length; i++){
  //   var currLetter = firstDigitLetters[i];
  //   var oneLessCombos = telephoneWords(restOfString);
  //   console.log('one less combos', oneLessCombos);
  //   combos = (oneLessCombos.map((combo)=>currLetter + combo));
  // }
  // return combos
  var index = 0;
  var combos = [];
  while (index < digitString.length) {
    var currNum = digitString[index];
    console.log(currNum);
    var len = combos.length;
    var letters = phoneDigitsToLetters[currNum];
    for (letter of letters) {
      if (index === 0) {
        combos.push(letter);
      } else {
        //console.log('in the else for letter', letter, 'of index', currNum);
        //console.log(len);
        for (var j = 0; j< len; j++) {
          //console.log('in the for loop');
          var item = combos[j];
          combos.push(item + letter);
          //console.log('combos', combos);
        }
      }
    }
    combos.splice(0,len);
    index++;
  }
  return combos;
};

console.log(telephoneWords('2745'));
  // *   => ['APGJ',
  // *        'APGK',
  // *        'APGL',
  // *        ..., // many many more of these
  // *        'CSIL']