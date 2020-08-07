/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  // let fraction = '';
  // let numList = number.toString().split('.');
  // const afterDecimal = parseInt(numList[1]);
  // const beforeDecimal = parseInt(numList[0]);
  // if(afterDecimal === 0){
  //   return `${beforeDecimal}/1`;
  // }
  let multiplied = number*1;
  let i = 1;
  while (multiplied%1 !== 0) {
    i++;
    multiplied = number*i;
  }
  console.log('i is ', i);
  console.log('final multiplied is', multiplied);
  return `${multiplied}/${i}`;
};

console.log(toFraction(2.5)) // 5/2
console.log(toFraction(3.0)) // 3/1
console.log(toFraction(4.75)) // 19/4
console.log(toFraction(0.6)) // 3/5