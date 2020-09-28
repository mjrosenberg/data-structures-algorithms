class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if len(strs) == 0:
            return ''
        if len(strs) == 1:
            return strs[0]
        prefix = ''
        index = 0
        loop = True
        while loop:
            curr = ''
            for i in strs:
                if i == '' or index >= len(i):
                    loop = False
                    return prefix
                if curr == '':
                    #print('checking 0')
                    curr = i[index]
                else:
                    if i[index] != curr:
                        return prefix
                    if index == len(i) - 1:
                        loop = False
            # print curr, prefix, i
            prefix += curr
            index +=1
        
        return prefix 
