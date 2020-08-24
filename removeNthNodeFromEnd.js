/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let prev = head;
    let curr = head;
    let len = 0;
    while (curr !== null){
        len += 1;
        curr = curr.next;
    }
    // if (len === 1){
    //     if (n === 1){
    //         head = null;
    //     }
    //     return head;
    // }
    // console.log('len is', len)
    let start = head;
    let pos = 1;
    while (start){
        if (pos === len - n){
            start.next = start.next.next;
            break;
        }
        start = start.next;
        pos++;
    }
    return head;
};
