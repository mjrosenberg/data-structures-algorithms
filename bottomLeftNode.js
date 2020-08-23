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
var findBottomLeftValue = function(root) {
    let depthChart = {}
    let traverse = (node, depth) => {
        if (node === null){
            return;
        }
        if (node.left === null && node.right === null){
            if (!depthChart[depth]){
                depthChart[depth] = [node.val];
            } else {
                depthChart[depth].push(node.val);
            }
            return;
        }
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }
    traverse(root, 0);
    let maxDepth = 0;
    for (key in depthChart){
        if (parseInt(key) > maxDepth){
            maxDepth = key;
        }
    }
    return depthChart[maxDepth][0];
};
