class Solution(object):
    def restoreString(self, s, indices):
        """
        :type s: str
        :type indices: List[int]
        :rtype: str
        """
        l = [None] * len(s)
        for i in range(0, len(indices)):
            l[indices[i]] = s[i]
        return ''.join(l)
