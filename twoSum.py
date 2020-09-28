class Solution(object):
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                sum1 = nums[i] + nums[j]
                if sum1 == target:
                    return [i,j]
        return [0,0]
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
  
