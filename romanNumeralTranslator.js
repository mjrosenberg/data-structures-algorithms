
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
  if (typeof romanNumeral !== 'string'){
    return null;
  }
  let count = 0;
  let i = 0;
  while (i < romanNumeral.length) {
    let curr = romanNumeral[i];
    let currVal = DIGIT_VALUES[curr];
    let next = romanNumeral[i+1];
    let nextVal = DIGIT_VALUES[next];
    if (next !== null && currVal < nextVal){
      count += nextVal-currVal;
      i += 2;
    } else {
      count += currVal;
      i++;
    }
  }
  return count;
};

console.log(translateRomanNumeral('III')); // should be 3
console.log(translateRomanNumeral('IV')); // should be 4
console.log(translateRomanNumeral('LIX')); // should be 59
console.log(translateRomanNumeral('MXM')); // should be 1990
console.log(translateRomanNumeral(50)); // should be null
