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
var maxDepth = function(root) {
    let depth = 0;
    if (root === null){
        return 0;
    }
    let dfs = (curr, currDepth) => {
        if (curr === null){
            if (currDepth > depth){
                depth = currDepth;
            }
            return;
        }
        dfs(curr.left, currDepth + 1);
        dfs(curr.right, currDepth + 1);
    }
    dfs(root, 0);
    return depth;
};
