class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dix = {}

        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in dix:
                return [dix[diff], i]
            
            dix[nums[i]] = i
        