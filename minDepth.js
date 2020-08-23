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
var minDepth = function(root) {
    let minDepth = 0;
    let traverse = (node, currDepth) => {
        if (node === null){
            return;
        }
        if (node.left === null && node.right === null){
            if (currDepth < minDepth || minDepth === 0){
                minDepth = currDepth;
            }
        }
        traverse(node.left, currDepth+1);
        traverse(node.right, currDepth+1);
    }
    traverse(root, 1);
    return minDepth;
};
