/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    let repeated = {};
    if (curr === null){
        return head;
    }
    while (curr !== null){
        if (curr.next === null){
            break;
        }
        if (curr.next.val === curr.val){
            curr.next = curr.next.next;
            // curr = curr.next;
            repeated[curr.val] = true;
        }
        curr = curr.next;
    }
    let start = head;
    let repeating = true;
    while (repeating){
        if (start === null){
            return start;
        }
        if (repeated[start.val] === true){
            start = start.next;
        } else {
            repeating = false;
        }
    }
    curr = start;
    while (curr.next !== null){
        if (repeated[curr.next.val]){
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return start;
};
