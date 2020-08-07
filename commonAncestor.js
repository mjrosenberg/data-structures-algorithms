
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(val) {
  this.val = val;
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  // TODO: implement me!
  let curr = this;
  // console.log(curr.children);
  while (curr.isDescendant(child1) && curr.isDescendant(child2)){
    // console.log('curr is', curr, 'its children are', curr.children);
    let now = curr;
    for (let i = 0; i < curr.children.length; i++){
      if (curr.children[i].isDescendant(child1) && curr.children[i].isDescendant(child2)){
        curr = curr.children[i];
        continue;
      }
    }
    if (now === curr){
      return curr.val;
    }
    // else if (curr.left.isDescendant(child1) && curr.left.isDescendant(child2)){
    //   curr = curr.left;
    // } else {
    //   return curr;
    // }
  }
  return null;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(node) {
  // TODO: implement me!
  let path = [];
  if (this.isDescendant(node)){
    // find path from this to the given node
    let curr = this;
    while (curr !== node) {
      path.push(curr.val);
      // console.log('curr is', curr);
      // console.log('path is', path);
      for (let  i = 0; i < curr.children.length; i++) {
        if (curr.children[i].isDescendant(node)){
          curr = curr.children[i];
          continue;
        } else if (curr.children[i] === node){
          curr = curr.children[i];
          continue;
        }
      }

    }
    path.push(node.val);
  } else if (node.isDescendant(this)){
    let curr = node;
    while (curr !== this) {
      path.unshift(curr.val);
      // console.log('curr is', curr);
      // console.log('path is', path);
      for (let  i = 0; i < curr.children.length; i++) {
        if (curr.children[i].isDescendant(this)){
          curr = curr.children[i];
        } else if (curr.children[i] === this){
          curr = curr.children[i];
          continue;
        }
      }
    }
    path.unshift(this.val);
    // find path from the node to this and reverse it
  } else {
    return null;
  }
  return path;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

var grandma = new Tree('grandma');
var mom = new Tree('mom');
grandma.addChild(mom);
var me = new Tree('me');
var oliver = new Tree('oliver');
var dad = new Tree('dad');
mom.addChild(me);
mom.addChild(oliver);
console.log(grandma.getAncestorPath(me)); // => [grandma, mom, me]
console.log(me.getAncestorPath(grandma)); // => [grandma, mom, me]
console.log(me.getAncestorPath(dad)); // => [grandma, mom, me]
console.log(grandma.getClosestCommonAncestor(me, mom)); // grandma
console.log(grandma.getClosestCommonAncestor(me, oliver)); // mom
console.log(grandma.getClosestCommonAncestor(mom, dad)); // null