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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let valTracker = {};
    let countTracker = {};
    let traverse = (node, level) => {
        if (node === null){
            return;
        }
        if (!countTracker[level]){
            countTracker[level] = 1;
            valTracker[level] = node.val;
        } else {
            countTracker[level]++;
            valTracker[level] += node.val;
        }
        traverse(node.left, level+1);
        traverse(node.right, level+1);
    }
    traverse(root, 0);
    let ans = [];
    for (let key in countTracker){
        ans[key] = valTracker[key]/countTracker[key];
    }
    return ans;
};
