/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null){
        return l2;
    }
    if (l2 === null){
        return l1;
    }
    let curr1 = l1;
    let curr2 = l2;
    let head1 = l1;
    let head2 = l2;
    let merged;
    if (head1.val <= head2.val){
        merged = head1;
        curr1 = curr1.next
    } else {
        merged = head2;
        curr2 = curr2.next
    }
    let currMerged = merged;
    while (curr1 !== null && curr2 !== null){
        if (curr1.val <= curr2.val){
            currMerged.next = curr1;
            currMerged = currMerged.next;
            curr1 = curr1.next;
        } else {
            currMerged.next = curr2;
            currMerged = currMerged.next;
            curr2 = curr2.next
        }
    }
    if (curr1 === null && curr2 !== null){
        currMerged.next = curr2;
    } else if (curr1 !== null && curr2 === null){
        currMerged.next = curr1;
    }
    return merged;
};
