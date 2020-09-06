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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    let traverse = (node) => {
        if (node === null){
            return;
        }
        if (L <= node.val && R >= node.val){
            sum += node.val;
        }
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return sum;
};
