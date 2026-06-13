class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()

        l = 0
        sol = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])
            sol = max(sol, r - l + 1)
        return sol