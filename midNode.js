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
var middleNode = function(head) {
    let length = 0;
    let curr = head;
    while (curr !== null){
        length++;
        curr = curr.next;
    }
    console.log(length);
    let mid = Math.floor(length/2) + 1;
    let currNum = 1;
    let midNode = head;
    while (currNum < mid){
        midNode = midNode.next;
        currNum++;
    }
    return midNode;
};
