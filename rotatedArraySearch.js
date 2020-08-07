/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  let ans = null;

  let maxIndex = rotated.length - 1;
  let minIndex = 0;
  let binarySearch = (min, max) => {
    let midIndex = Math.floor((max - min)/2)+ min;
    let minElement = rotated[min];
    let maxElement = rotated[max];
    let midElement = rotated[midIndex];
    console.log('mins', minElement, min);
    console.log('mids', midElement, midIndex);
    console.log('maxs', maxElement, max)
    if (target === midElement){
      //console.log('hit target');
      ans = midIndex;
      return;
    }
    if (minElement + 1 === maxElement){
      ans = null;
      return;
    }
    if (midElement < minElement && target > minElement){
      binarySearch(min, midIndex);
    } else if (target < midElement){
      binarySearch(min, midIndex);
    } else if (target > midElement && target < minElement){
      binarySearch(midIndex, max);
    } else {
      binarySearch(midIndex, max);
    }
  }
  binarySearch(minIndex, maxIndex);
  return ans;
  // for (let i in rotated){
  //   const element = rotated[i];
  //   if (element === target){
  //     return i;
  //   }
  // }

  // return null;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 6)) //5