/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    while (node !== null){
        if (node.next.next === null){
            node.val = node.next.val;
            node.next = null;
            break;
        } else {
            node.val = node.next.val;
            node = node.next;
        }
    }
};
