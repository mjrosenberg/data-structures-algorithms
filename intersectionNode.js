/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currA = headA;
    let ans = null;
    while(currA !== null){
            let currB = headB;
        while (currB !== null){
            if (currA === currB){
                return currA;
            }
            currB = currB.next;
        }
            currA = currA.next;
        
    }
    return ans;
};
