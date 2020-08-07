'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
  var results = [];
  // var asyncMapHelper = (tasks, callback, i) => {
  //   var task = tasks[i];
  //   //console.log('task', task);
  //   task((num)=>{
  //     //results.push(num);
  //     callback(num);
  //     if (i < tasks.length - 1){
  //       asyncMapHelper(tasks.slice(i, tasks.length),callback, i+1);
  //     }
  //   });
  // }
  // asyncMapHelper(tasks, (num)=>{results.push(num);}, 0);
  // //console.log(results, 'result');
  // callback(results);
  // return results;
  var counter = 0;
  var currCounter = -1;
  var goal = tasks.length;
  var whileLoop = (counter, currCounter) => {
    while(counter < goal && counter !== currCounter) {
      currCounter++;
      var task = tasks[counter];
      // console.log(task);
      task((num)=> {
        // console.log(num);
        results.push(num);
        if (counter === goal-1){
          callback(results);
        }
        // console.log('done with helper', counter);
        counter++; //need to rerun the loop because it has already checked it
        whileLoop(counter, currCounter)
        // console.log('counter incremented', counter);
      });
      // console.log(counter);
    }
  }
  whileLoop(counter, currCounter);

};


asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  }
  );