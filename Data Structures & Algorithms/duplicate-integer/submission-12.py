class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        sol = set()

        for n in nums:
            if n in sol:
                return True
            sol.add(n)
        
        return False
        