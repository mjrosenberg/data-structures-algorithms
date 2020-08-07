/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
// let Number = (value) => {
//   this.number = value
// }
Number.prototype.toEnglish = function () {
  // return my value as english words
  let numAsWord = '';
  let addedStart = false;
  let number = this;
  let numDigits = Math.max(Math.floor(Math.log10(this)), 0) + 1;
  // console.log(this, numDigits);
  if (this <= 20){
    // console.log(this);
    numAsWord = numbersToWords[this];
  } else {
    // write a helper function to handle the hundreds
    // numAsWord = handleHundreds(this);
    for (i = numDigits; i>0; i--){
      if (i%3 !== 0){
        if(addedStart === false){
          //call get hundreds on the first one or two digits
          num = Math.floor(number/Math.pow(10,i-i%3));
          // console.log('first num is', num);
          if (num <=20){
            numAsWord += `${numbersToWords[num]} ${numbersToPlace[Math.pow(10,i-i%3)] || ''} `;
          } else {
            numAsWord += `${handleHundreds(num)} ${numbersToPlace[Math.pow(10,i-i%3)] || ''} `;
          }
          number -= num * Math.pow(10,i-i%3);
          addedStart = true;
        } else {
          continue;
        }
      } else {
        //call get hundreds on the next 3 digits and add the suffix
        // console.log(number);
        num = Math.floor(number/Math.pow(10,i-3));
        // console.log('num is', num);
        if (num === 0){
          continue;
        }
        numAsWord += `${handleHundreds(number)} ${numbersToPlace[Math.pow(10,i-3)] || ''} `;
        number -= num * Math.pow(10,i-3);
        addedStart = true;
      }
    }
  }

  return numAsWord.trim();
};

let handleHundreds = (num) => {
  let toStr = '';
  let prefix = 0;
  let twoDigit = false;
  let numDigits = Math.max(Math.floor(Math.log10(num)), 0) + 1;
  // console.log('num digits is', numDigits, 'for number', num);
  let i = 0
  for (let i = 0; i < numDigits; i++){
    if (numDigits === 2 && i === 0){
      i += 1;
      numDigits +=1;
      twoDigit = true;
    }
    let place = Math.pow(10,i);
    // console.log('place is', place);
    let divider = Math.pow(10, numDigits-i -1);
    // console.log('divider is', divider);
    let digit = Math.floor(num/divider);
    num -= digit*divider;
    // console.log('digit is', digit);
    if(i === 0){
      if (digit === 0){
        continue;
      }
      toStr += `${numbersToWords[digit]} hundred`
      continue;
    }
    if(i === 1){
      if (digit === 0){
        prefix = 2;
        continue;
      }
      if (digit === 1) {
        prefix = digit;
        continue;
      }
      if (digit !== 1 || digit !== 0){
        if (twoDigit === false){
          toStr += ' ';
        }
        toStr += `${numbersToWords[digit*10]}`
      }
    }
    if (i === 2){
      if (digit === 0){
        continue;
      }
      if (prefix === 1){
        toStr += ` ${numbersToWords[digit+10]}`
      } else {
        if (prefix === 2) {
          toStr += ` ${numbersToWords[digit]}`;
        } else {
          toStr += `-${numbersToWords[digit]}`
        }
      }
    }
    // console.log('string is', toStr, 'after i digits', i);
  }
  return toStr.trim();
}
// let num1 = new Number(7);
console.log((53148).toEnglish()); //7
console.log((5324148).toEnglish()); //7
console.log((1000000000000).toEnglish()); //7
console.log(handleHundreds(217023));