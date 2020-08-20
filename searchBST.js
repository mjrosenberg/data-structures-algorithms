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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let curr = root;
    while (curr !== null){
        if (val === curr.val){
            return curr;
        } else if (val < curr.val){
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return null;
};
