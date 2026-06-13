class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        maps = {}

        for i in range(len(nums)):
            diff = target - nums[i]

            if nums[i] in maps:
                return [maps[nums[i]], i]

            maps[diff] = i

        