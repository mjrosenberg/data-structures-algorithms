/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  let backwards = 0;
  let numDigits = Math.max(Math.floor(Math.log10(number)), 0) + 1;
  console.log('numDigits', numDigits);
  if(number < 10){
    return number
  }
  for (let i = 0; i < numDigits; i++){
    let place = Math.pow(10,i);
    console.log('place is', place);
    let divider = Math.pow(10, numDigits-i -1);
    console.log('divider is', divider);
    let digit = Math.floor(number/divider);
    console.log('digit is', digit);
    number -= digit*divider;
    backwards += digit*place;
  }
  return backwards;
}

console.log(reverseInteger(7021));
