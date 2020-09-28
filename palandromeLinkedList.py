# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        asArr = []
        curr = head
        while (curr != None):
            asArr.append(curr.val)
            curr = curr.next
        front = 0
        back = len(asArr) -1
        while (front < back):
            if (asArr[front] != asArr[back]):
                return False
            front += 1
            back -=1
        return True
