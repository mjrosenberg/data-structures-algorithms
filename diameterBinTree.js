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
var diameterOfBinaryTree = function(root) {
    let min = 0;
    let max = 0;
    let traverse = (node, rightScore) => {
        console.log('node is', node, 'right score is', rightScore);
        if (node === null){
            return;
        }
        if (rightScore > max){
            max = rightScore;
        } else if (rightScore < min){
            min = rightScore;
        }
        traverse(node.left, rightScore - 1);
        traverse(node.right, rightScore + 1);
    }
    traverse(root, 0);
    return max - min;
};
