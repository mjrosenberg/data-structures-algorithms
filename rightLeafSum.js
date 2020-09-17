/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    let traverse = (node) => {
        if (node === null){
            return;
        }
        if (node.right !== null && node.right.left === null && node.right.right === null){
            sum += node.right.val;
        }
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return sum;
};
