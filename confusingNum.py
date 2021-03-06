class Solution(object):
    def confusingNumber(self, N):
        """
        :type N: int
        :rtype: bool
        """
        rotated = {'0':'0','1':'1', '6':'9', '8':'8', '9':'6'}
        Nstr = str(N)
        newNum = ''
        for char in Nstr:
            if (char == '2' or char == '3' or char == '4' or char == '5' or char == '7'):
                return False
            else:
                newNum = rotated[char] + newNum
        # print(newNum)
        if newNum == Nstr:
            return False
        return True
