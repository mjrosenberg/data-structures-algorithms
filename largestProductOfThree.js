/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  let product = 1;
  let largest = 0;
  let second = 0;
  let third = 0;
  if (array.length === 0){
    return 0;
  } else if (array.length > 0 && array.length < 3){
    for (item of array){
      product = product*item;
    }
  } else {
    for (item of array){
      if (item > largest){
        third = second;
        second = largest;
        largest = item;
        continue;
      }
      if (item > second){
        third = second;
        second = item;
        continue;
      }
      if (item > third){
        third = item;
        continue;
      }
    }
    product = largest*second*third;
  }
  return product;
};


console.log(largestProductOfThree([1,2,4])) //8
console.log(largestProductOfThree([1,2,3,4,10])) //120
console.log(largestProductOfThree([1,2])) //2