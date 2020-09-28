class Solution(object):
    def countOdds(self, low, high):
        """
        :type low: int
        :type high: int
        :rtype: int
        """
        if (low%2 != 0):
            return int(math.floor(1 + (high-low)/2))
        else:
            count = int(math.floor((high-low)/2))
            if high%2 != 0:
                return count+1
            return count
