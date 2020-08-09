/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    while (curr !== null){
        if (curr.visited === undefined){
            curr.visited = true;
        } else if (curr.visited === true){
            return true;
        }
        curr = curr.next;
    }
    return false;
};
