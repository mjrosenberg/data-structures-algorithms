class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        xStr = str(x)
        front = 0
        back = len(xStr) -1
        while (front < back):
            if (xStr[front] != xStr[back]):
                return False
            front+=1
            back-=1
        return True
