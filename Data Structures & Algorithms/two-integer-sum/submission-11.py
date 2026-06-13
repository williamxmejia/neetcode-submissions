class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sol = {}

        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in sol:
                return [sol[diff], i]
            sol[nums[i]] = i