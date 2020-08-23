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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let tracker = {};
    let scores = [];
    let ans = [];
    let traverse = (node, leftScore) => {
        if (node === null){
            return;
        } else {
            if (!tracker[leftScore]){
                tracker[leftScore] = [node.val];
                scores.push(leftScore);
            } else {
                tracker[leftScore].push(node.val);
            }
            traverse(node.left, leftScore + 1);
            traverse(node.right, leftScore -1);
        }
    }
    traverse(root, 0);
    // console.log(scores.sort((a, b) => a - b));
    for (score of scores.sort((a, b) => a - b)){
        ans.unshift(tracker[score]);
    }
    // console.log(tracker)
    return ans;
    
};
