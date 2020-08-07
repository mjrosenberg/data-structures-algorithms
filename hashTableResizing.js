/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;
  result.currentlyGrowing = false;
  result.currentlyShrinking = false;

  result.insert = function(str, val) {
    var index =  getIndexBelowMaxForKey(str, result.storageLimit);
    // TODO: implement `insert`
    result.size++;
    if (result.storage.length === 0){
      for (var i = 0; i < result.storageLimit; i++){
        result.storage[i] = [];
      }
    }
    result.storage[index].push([str,val]);
    if (result.size/(result.storageLimit) >= .75 && result.currentlyGrowing === false){
      result.grow();
    }
    //result.currentlyGrowing = false;
  };

  result.retrieve = function(str) {
    // TODO: implement `retrieve`
    var index =  getIndexBelowMaxForKey(str, result.storageLimit);
    var bucket  = result.storage[index];
    for (item of bucket){
      if (item[0] === str){
        return item[1];
      }
    }
  };

  result.remove = function(str) {
    // TODO: implement `remove`
    var index =  getIndexBelowMaxForKey(str, result.storageLimit);
    // TODO: implement `insert`
    result.size--;
    var bucket = result.storage[index];
    for(let i = 0; i < bucket.length; i++){
      if(bucket[i][0] === str){
        bucket.splice(i, 1);
    }
  }
    if (result.size/(result.storageLimit) <= .25 && result.currentlyShrinking === false){
      result.shrink();
    }
  };
  result.grow = function(){
    result.storageLimit = (result.storageLimit)*2;
    //console.log(result.storageLimit);
    result.currentlyGrowing = true;
    var newStorage = result.storage;
    result.storage = [];
    result.size = 0;
    for (var bucket of newStorage){
      if (bucket === undefined){
        continue;
      }
      for(var i = 0; i<bucket.length; i++){
        var item = bucket[i][0];
        var val = bucket[i][1];
        //console.log(item, result.currentlyGrowing);
        result.insert(item,val);
      }
    }
    result.currentlyGrowing = false;
  }
  result.shrink = function(){
    result.storageLimit = (result.storageLimit)/2;
    //console.log()
    result.currentlyShrinking = true;
    result.currentlyGrowing = true;
    var newStorage = result.storage;
    result.storage = [];
    result.size = 0;
    for (bucket of newStorage){
      if (bucket === undefined){
        continue;
      }
      for(var i = 0; i<bucket.length; i++){
        var item = bucket[i][0];
        var val = bucket[i][1];
        //console.log(item, result.currentlyGrowing);
        result.insert(item,val);
      }
    }
    result.currentlyGrowing = false;
  }
  return result;
};

var table = makeHashTable();
table.insert('a','b');
table.insert('b','c');
table.insert('c','d');
table.insert('d','e');
console.log(table.storage);
table.insert('e','f');
table.insert('f','g');
console.log(table.storage);
table.remove('a');
table.remove('b');
table.remove('c');
console.log(table.retrieve('f'));
console.log(table.storage);