/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  // TODO: Your code here
  obj.on = function(change, cb){
    if (obj[change] === undefined) {
      obj[change] = [cb];
    } else {
      obj[change].push(cb);
    }
  }
  obj['trigger'] = function(...args){
    const change = args[0];
    const otherargs = args.slice(1,args.length);
    if (obj[change] === undefined){
      return;
    }
    for (let cb of obj[change]){
      cb(...otherargs);
    }
  }
  return obj;
};

// var obj = mixEvents({ name: 'Alice', age: 30 });
// obj.on('ageChange', function(age){ // On takes an event name and a callback function
//    console.log('Age changed');
//    console.log(age);
// });
// obj.age++;
// obj.on('ageChange', function(){ // On takes an event name and a callback function
// console.log('my age is changing');
// });
// obj.trigger('ageChange', 30); // This should call our callback! Should log 'age changed'.

