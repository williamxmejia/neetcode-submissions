class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sol = {}

        for i in range(len(nums)):
            diff = target - nums[i]

            if nums[i] in sol:
                return [sol[nums[i]], i]
            sol[diff] = i