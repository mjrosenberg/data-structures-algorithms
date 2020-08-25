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
var maxLevelSum = function(root) {
    let tracker = {};
    let traverse = (node, level) => {
        if (node === null){
            return
        } else {
            if (!tracker[level]){
                tracker[level] = node.val;
            } else {
                tracker[level]+= node.val;
            }
            traverse(node.left, level+1);
            traverse(node.right, level+1);
        }
    }
    traverse(root, 1);
    let maxVal;
    let maxLevel = 0;
    for (key in tracker){
        if (maxVal === undefined || tracker[key] > maxVal){
            maxVal = tracker[key];
            maxLevel = parseInt(key);
        }
    }
    return maxLevel;
};
