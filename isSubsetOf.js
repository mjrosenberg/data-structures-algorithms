/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  let copy = [];
  for (item of arr){
    if (this.includes(item)){
      copy.push(item);
    }
  }
  const copySet = new Set(copy);
  const aSet = new Set(this);
  console.log(copySet, aSet);
  for (var a of aSet) if (!copySet.has(a)) return false;
  return true;
  // return  copySet === aSet;
};

var a = ['commit','push', 'push'];
console.log(a.isSubsetOf(['commit','rebase','push','blame'])); // true
