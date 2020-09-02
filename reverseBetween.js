/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let curr = head;
    let currPos = 1;
    if (m -n === 0){
        return head;
    }
    while(currPos < m - 1){
        // console.log(curr.next);
        curr = curr.next;
        currPos++;
    }
    let oneBefore = curr;
    let tracker = {};
    while(currPos <=n){
        tracker[currPos] = curr.val;
        curr = curr.next;
        currPos++;
    }
    let oneAfter = curr;
    let reversed = new ListNode(tracker[n], null);
    let reversedHead = reversed;
    for (let i = n - 1 ; i >= m; i--){
        // console.log(oneBefore, i, tracker[i]);
        reversedHead.next = new ListNode(tracker[i], null);
        reversedHead = reversedHead.next;
    }
    console.log('reversed portion is', reversed);
    if (m === 1){
        head = reversed;
    } else {
        oneBefore.next = reversed;
    }
    reversedHead.next = oneAfter;
    return head;
};
