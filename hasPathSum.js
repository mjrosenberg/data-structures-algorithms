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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let hasSum = false;
    let traverse = (node, currSum) => {
        if (node === null){
            return;
        }
        currSum += node.val;
        if (currSum === sum && node.left === null && node.right === null){
            hasSum = true;
            return;
        }
        traverse(node.left, currSum);
        traverse(node.right, currSum)
    }
    traverse(root, 0);
    return hasSum;
};
