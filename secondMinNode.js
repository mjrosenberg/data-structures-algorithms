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
var findSecondMinimumValue = function(root) {
    let min;
    let second;
    let traverse = (node) => {
        if (node === null){
            return;
        }
        if (!min || node.val < min){
           min = node.val; 
        } else if (node.val === min){
        } else if (!second || node.val < second){
            min = second;
            second = node.val;
        }
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return second || -1;
};
