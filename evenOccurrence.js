/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  var occurrences = {};
  for (item of arr) {
    if(occurrences[item] === undefined) {
      occurrences[item] = 0;
    }
    occurrences[item] += 1;
  } //populating an object with each of the elements in the array as the key and the number of times it appears as the value
  for (item of arr) { // running through each item and checking if it appears an even number of times in arr, return that number if so bc its the first one to be even since we are iterating in order
    if (occurrences[item]%2 === 0){
      return item;
    }
  }
  return null;
};
// var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 1, 1, 7]);
// console.log(onlyEven); //  4