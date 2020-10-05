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
var longestConsecutive = function(root) {
    let max = 0;
    let traverse = (node, count, prev) => {
        // console.log(prev, node, count)
        if (count > max){
            max = count;
        }
        if (node === null){
            return;
        }
        if (prev === null || node.val === prev + 1){
            // console.log(count)
            traverse(node.right, count+1, node.val);
            traverse(node.left, count+1, node.val);
        } else {
           traverse(node.right, 1, node.val);
            traverse(node.left, 1, node.val); 
        }
    }
    traverse(root, 1, null);
    return max;
};
