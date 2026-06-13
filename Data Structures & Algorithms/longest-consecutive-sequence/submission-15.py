class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        setNum = set(nums)
        longest = 0

        for n in setNum:
            if (n - 1) not in setNum:
                length = 1
                while (n + length) in setNum:
                    length += 1
                longest = max(longest, length)
        
        return longest
        