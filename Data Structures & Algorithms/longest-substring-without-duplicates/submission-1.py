class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        tracker = set()
        l = 0
        sol = 0

        for r in range(len(s)):
            while s[r] in tracker:
                tracker.remove(s[l])
                l += 1
            tracker.add(s[r])
            sol = max(sol, r - l + 1)

        return sol

        