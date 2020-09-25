/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null){
        return null;
    }
    while (head === null || head.val === val){
        if (head === null){
            return null;
        }
        head = head.next;
    }
    let curr = head;
    while (curr.next !== null){
        if (curr.next.val === val){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    if (curr.val === val){
        curr = null;
    }
    return head;
};
