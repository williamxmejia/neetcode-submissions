class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        maps = {}

        for n in nums:
            if n in maps:
                return True
            maps[n] = True
        
        return False
         