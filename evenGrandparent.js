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
var sumEvenGrandparent = function(root) {
    let sum = 0;
    let traverse = (node, parent, gparent) => {
        if (node === null){
            return;
        }
        if (gparent === null){
        } else if (gparent%2 === 0){
            sum += node.val
        }
        // let newgparent = parent
        traverse(node.left, node.val, parent)
        traverse(node.right, node.val, parent)
    }
    traverse(root.left, root.val, null)
    traverse(root.right, root.val, null)
    return sum
};
