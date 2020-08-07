/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
var Stack = function() {
  //this.oldmin;
  this.minVals = {};
  this.minimum;
  this.storage = [];
};
  // add an item to the top of the stack
Stack.prototype.push = function(value) {
  if (this.minimum === undefined){
    this.minimum = value;
  }
  this.storage.push(value);
  this.minVals[value] = true;
  if (value < this.minimum){
    //this.oldmin = this.minimum;
    this.minimum = value;
  }
};

  // remove an item from the top of the stack
Stack.prototype.pop = function() {
  let popped = this.storage.pop();
  delete this.minVals[popped];
  if (this.minimum >= popped){
    // console.log(Object.keys(this.minVals));
    //console.log("this was just removed: ", popped)
    if (this.storage.length === 0){
    this.minimum = undefined;
    } else{
    this.minimum = Number(Object.keys(this.minVals)[0]);
    }

  }
};

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return this.storage.length;
  };

  // return the minimum value in the stack
Stack.prototype.min = function() {
  return this.minimum;
};

// var example = new Stack();
// example.push(4);
// example.push(3);
// console.log(example.min()); //3
// example.pop();
// console.log(example.minimum); //4
// example.pop();
// console.log(example.storage); //[]
// console.log(example.minimum); //undefined
// example.push(3);
// example.push(2);
// example.push(2);
// console.log(example.storage); //[3, 2, 2]
// console.log(example.min()); //2
