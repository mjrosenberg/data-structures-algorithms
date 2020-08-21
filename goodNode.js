
 // * Definition for a binary tree node.
//  function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
//   }
 

 // * @param {TreeNode} root
 // * @return {number}
 // */
var goodNodes = function(root) {
    let count = 0;
    let goodCount = (node, currMax) => {
        // console.log(node, currMax);
        if (node === null){
            return;
        } 
        if (node.val >= currMax){
            currMax = node.val;
            count++;
        }
        goodCount(node.left, currMax);
        goodCount(node.right, currMax);
    }
    goodCount(root, root.val)
    return count;
};
