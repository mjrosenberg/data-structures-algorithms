class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        xStr = str(x)
        reverse = ''
        neg = False
        for c in xStr:
            # print (c, reverse)
            if c == '-':
                neg = True
            else:
                reverse = c + reverse
        # print(reverse)
        ans = int(reverse)
        if (ans > 2**31 - 1):
            return 0
        if (neg):
            return ans*-1
        return ans
