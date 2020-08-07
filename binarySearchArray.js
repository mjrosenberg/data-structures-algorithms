/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var index = null;
  if (target > array[array.length-1] || target < array[0]){
    return null;
  }
  var binSearch = (minIndex, maxIndex) => {
    var midIndex = Math.floor((minIndex + maxIndex)/2);
    var element = array[midIndex];
    if (maxIndex - 1 === minIndex && element !== target){
      return;
    }
    if (element === target){
      //console.log('target has been reached', midIndex);
      index = midIndex;
      return;
    } else if (element>target){
      //console.log('target is below', element);
      return binSearch(minIndex, midIndex);
    } else{
      //console.log('target is above', element, midIndex, maxIndex);
      return binSearch(midIndex, maxIndex);
    }
  }
  binSearch(0, array.length);
  return index;
};

// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index); // 3
// index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null
// index = binarySearch([1, 2, 3, 4, 5, 8, 10], 10);
// console.log(index); // 10
index = binarySearch([1, 2, 3, 4, 5, 8, 10, 11, 12,13,14,15,16,17,18,19,20,22,23,24], 21);
console.log(index); // 10
